import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {RepositoryInfo} from '../../../../../../Api/RepositoryInfo';
import isUrl from 'is-url';
import {ObjectType} from '../../../../../../CONSTANT';
import path from 'path';
import MarkdownPreviewer from '../../../../../../Component/MarkdownPreviewer';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    markdown: string;
}

interface IState
{
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
        };
    }

    async componentDidMount()
    {
        const {match: {params: {commitHash}}} = this.props;
        this.setState({loading: true});
        if (typeof commitHash !== 'string')
        {
            await this.loadMainBranchName();
        }
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
            const {match: {params: {username, repositoryName: name}}} = this.props;
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

    processHTML = async (html: string) =>
    {
        // 处理其中所有的 <a> 和 <img>
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
        return node.innerHTML;
    };

    getCompleteLink = async (link: string): Promise<string> =>
    {
        // 判断是不是完整 URL 或是绝对路径，如果是保持原样
        if (link.length === 0 || isUrl(link) || path.isAbsolute(link) || link.charAt(0) === '#' || link.charAt(0) === '?')
        {
            return link;
        }
        else // 如果是相对路径，进行处理
        {
            const {match: {params: {username, repositoryName, objectType, commitHash, path: filePath}}} = this.props;
            const {mainBranchName} = this.state;
            const absoluteFilePath = filePath ? (
                objectType === ObjectType.BLOB
                    ? path.join(path.dirname(filePath), link)   // 如果当前页面是 BLOB，退到所在文件夹作为基础
                    : path.join(filePath, link) // 如果当前页面是 TREE，当前文件夹就是基础
            ) : path.join('', link);
            const fileInfo = await RepositoryInfo.fileInfo({username}, {name: repositoryName}, absoluteFilePath, commitHash ? commitHash : mainBranchName);
            if (fileInfo !== null)
            {
                const {objectType} = fileInfo;
                if (objectType === ObjectType.BLOB)    // 是文件
                {
                    return RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repositoryName,
                        commitHash: commitHash ? commitHash : mainBranchName,
                        path: absoluteFilePath,
                        objectType: ObjectType.BLOB,
                    });
                }
                else if (objectType === ObjectType.TREE) // 是文件夹
                {
                    return RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repositoryName,
                        commitHash: commitHash ? commitHash : mainBranchName,
                        path: absoluteFilePath,
                        objectType: ObjectType.TREE,
                    });
                }
                else    // objectType === ObjectType.COMMIT
                {
                    return RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repositoryName,
                        commitHash: commitHash ? commitHash : mainBranchName,
                        path: absoluteFilePath,
                        objectType: ObjectType.COMMIT,
                    });
                }
            }
            else    // ……请求出错就按照 BLOB 返回（总不能什么都不返回是吧）
            {
                return RouterFunction.generateRepositoryCodeRoute({
                    username,
                    repositoryName,
                    commitHash: commitHash ? commitHash : mainBranchName,
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
            const {match: {params: {username, repositoryName, objectType, commitHash, path: filePath}}} = this.props;
            const {mainBranchName} = this.state;
            const absoluteFilePath = filePath ? (
                objectType === ObjectType.BLOB
                    ? path.join(path.dirname(filePath), src)   // 如果当前页面是 BLOB，退到所在文件夹作为基础
                    : path.join(filePath, src) // 如果当前页面是 TREE，当前文件夹就是基础
            ) : path.join('', src);
            const rawFile = await RepositoryInfo.rawFile({username}, {name: repositoryName}, absoluteFilePath, commitHash ? commitHash : mainBranchName);
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

    render()
    {
        const {loading} = this.state;
        const {markdown} = this.props;
        return (<MarkdownPreviewer markdown={markdown}
                                   processHTML={this.processHTML} loading={loading} />);
    }
}

export default withRouter(RepositoryMarkdownPreviewer);