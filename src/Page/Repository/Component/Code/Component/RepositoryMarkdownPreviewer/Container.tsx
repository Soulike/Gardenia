import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {RepositoryInfo} from '../../../../../../Api/RepositoryInfo';
import isUrl from 'is-url';
import {ObjectType} from '../../../../../../CONSTANT';
import path from 'path';
import {hljs, mdConverter} from '../../../../../../Singleton';
import HTMLPreviewer from '../../../../../../Component/HTMLPreviewer';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    markdown: string;
}

interface IState
{
    html: string;
    mainBranchName: string;
    loading: boolean;
}

class RepositoryMarkdownPreviewer extends PureComponent<IProps, IState>
{
    private objectURLs: string[] = [];

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            mainBranchName: '',
            loading: false,
            html: '',
        };
    }

    async componentDidMount()
    {
        const {match: {params: {branch}}} = this.props;
        this.setState({loading: true});
        if (typeof branch !== 'string')
        {
            await this.loadMainBranchName();
        }
        // 以下两者有顺序要求
        await this.processMarkdownLinks();
        this.processCodes();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {markdown} = this.props;
        const {markdown: prevMarkdown} = prevProps;
        if (markdown !== prevMarkdown)
        {
            await this.componentDidMount();
        }
    }

    componentWillUnmount()
    {
        this.objectURLs.forEach(url => URL.revokeObjectURL(url));
    }

    loadMainBranchName = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: name}}} = this.props;
            const branchesWrapper = await RepositoryInfo.branches({username, name});
            if (branchesWrapper !== null)
            {
                const {branches} = branchesWrapper;
                for (const {name, isDefault} of branches)
                {
                    if (isDefault)
                    {
                        this.setState({mainBranchName: name}, () => resolve());
                        break;
                    }
                }
            }
        });
    };

    processMarkdownLinks = async () =>
    {
        // 转换成 HTML，处理其中所有的 <a> 和 <img>
        const {markdown} = this.props;
        const html = mdConverter.makeHtml(markdown);
        const newDocument = document.implementation.createHTMLDocument();
        const node = newDocument.createElement('div');
        node.innerHTML = html;
        const anchors = node.getElementsByTagName('a');
        const imgs = node.getElementsByTagName('img');
        const asyncJobs: Promise<any>[] = [];
        for (const anchor of anchors)
        {
            const href = anchor.getAttribute('href');
            if (href !== null)
            {
                asyncJobs.push((async () =>
                {
                    anchor.setAttribute('href', await this.getCompleteLink(href));
                })());
            }
        }
        for (const img of imgs)
        {
            const src = img.getAttribute('src');
            if (src !== null)
            {
                asyncJobs.push((async () =>
                {
                    const objectURL = await this.getImageURL(src);
                    this.objectURLs.push(objectURL);
                    img.setAttribute('src', objectURL);
                })());
            }
        }
        await Promise.all(asyncJobs);
        this.setState({html: node.innerHTML});
    };

    getCompleteLink = async (link: string): Promise<string> =>
    {
        // 判断是不是完整 URL 或是绝对路径，如果是保持原样
        if (isUrl(link) || path.isAbsolute(link) || link.at(0) === '#' || link.at(0) === '?')
        {
            return link;
        }
        else // 如果是相对路径，进行处理
        {
            const {match: {params: {username, repository, objectType, branch, path: filePath}}} = this.props;
            const {mainBranchName} = this.state;
            const absoluteFilePath = filePath ? (
                objectType === ObjectType.BLOB
                    ? path.join(path.dirname(filePath), link)   // 如果当前页面是 BLOB，退到所在文件夹作为基础
                    : path.join(filePath, link) // 如果当前页面是 TREE，当前文件夹就是基础
            ) : path.join('', link);
            const fileInfo = await RepositoryInfo.fileInfo({username}, {name: repository}, absoluteFilePath, branch ? branch : mainBranchName);
            if (fileInfo !== null)
            {
                const {exists, type} = fileInfo;
                if (!exists || type === ObjectType.BLOB)    // 是文件
                {
                    return RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repository,
                        branch: branch ? branch : mainBranchName,
                        path: absoluteFilePath,
                        objectType: ObjectType.BLOB,
                    });
                }
                else // 是文件夹
                {
                    return RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repository,
                        branch: branch ? branch : mainBranchName,
                        path: absoluteFilePath,
                        objectType: ObjectType.TREE,
                    });
                }
            }
            else    // ……请求出错就按照 BLOB 返回（总不能什么都不返回是吧）
            {
                return RouterFunction.generateRepositoryCodeRoute({
                    username,
                    repository,
                    branch: branch ? branch : mainBranchName,
                    path: absoluteFilePath,
                    objectType: ObjectType.BLOB,
                });
            }
        }
    };

    getImageURL = async (src: string): Promise<string> =>
    {
        // 判断是不是完整 URL 或是绝对路径，如果是保持原样
        if (isUrl(src) || path.isAbsolute(src))
        {
            return src;
        }
        else // 如果是相对路径，进行处理
        {
            const {match: {params: {username, repository, objectType, branch, path: filePath}}} = this.props;
            const {mainBranchName} = this.state;
            const absoluteFilePath = filePath ? (
                objectType === ObjectType.BLOB
                    ? path.join(path.dirname(filePath), src)   // 如果当前页面是 BLOB，退到所在文件夹作为基础
                    : path.join(filePath, src) // 如果当前页面是 TREE，当前文件夹就是基础
            ) : path.join('', src);
            const rawFile = await RepositoryInfo.rawFile({username}, {name: repository}, absoluteFilePath, branch ? branch : mainBranchName);
            if (rawFile !== null)
            {
                return URL.createObjectURL(rawFile);
            }
            else
            {
                return src;
            }
        }
    };

    processCodes = () =>
    {
        const {html} = this.state;
        this.setState({loading: true});
        const node = document.createElement('div');
        node.innerHTML = html;
        node.querySelectorAll('pre code')
            .forEach(block => hljs.highlightBlock(block));
        this.setState({html: node.innerHTML, loading: false});
    };

    render()
    {
        const {html, loading} = this.state;
        return (<HTMLPreviewer html={html} processing={loading} />);
    }
}

export default withRouter(RepositoryMarkdownPreviewer);