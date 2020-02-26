import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Commit} from '../../../../../../Class';
import {RepositoryInfo} from '../../../../../../Api';
import hljs from 'highlight.js';
import path, {basename} from 'path';
import {mdConverter} from '../../../../../../Singleton';
import {Interface as RouterInterface} from '../../../../../../Router';
import {File} from '../../../../../../Function';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    exists: boolean,
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Commit,
    loading: boolean,
    html: string;
}

class FileReader extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            exists: true,
            isBinary: false,
            isOversize: false,
            lastCommit: new Commit('', '', '', 0, '', ''),
            loading: true,
            html: '',
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadLastCommit();
        await this.loadFileInfo();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prePathname}} = prevProps;
        if (pathname !== prePathname)
        {
            await this.componentDidMount();
        }
    }

    loadLastCommit = async () =>
    {
        const {match: {params: {username, repository: name, path, branch}}} = this.props;
        const lastCommit = await RepositoryInfo.lastCommit({username}, {name}, branch!, path);
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
        }
    };

    loadFileInfo = async () =>
    {
        const {lastCommit: {commitHash}} = this.state;
        const {match: {params: {username, repository: name, path}}} = this.props;
        const fileInfo = await RepositoryInfo.fileInfo({username}, {name}, path!, commitHash);
        if (fileInfo !== null)
        {
            const {exists, size, isBinary} = fileInfo;
            this.setState({exists});
            if (exists)
            {
                this.setState({isBinary: isBinary!});
                if (!isBinary)   // 不是二进制文件，但大小超过 1M
                {
                    if (size! > 1024 * 1024)
                    {
                        this.setState({isOversize: true});
                    }
                    else    // 不是二进制文件，且大小小于 1M，就加载文件内容
                    {
                        await this.loadHTML();
                    }
                }
            }
        }
    };

    loadHTML = async () =>
    {
        const {match: {params: {username, repository: name, path}}} = this.props;
        const {isBinary, exists, isOversize, lastCommit: {commitHash}} = this.state;
        const fileName = this.getFileNameFromPath(path!);
        const fileRawContent = await RepositoryInfo.rawFile({username}, {name}, path!, commitHash);
        if (fileRawContent !== null)
        {
            const rawContent = await File.transformBlobToString(fileRawContent);
            let html = '';
            if (exists && !isOversize && !isBinary)
            {
                if (this.isMarkdown(fileName))
                {
                    html = mdConverter.makeHtml(rawContent);
                    const node = document.createElement('div');
                    node.innerHTML = html;
                    node.querySelectorAll('pre code')
                        .forEach(block => hljs.highlightBlock(block));
                    html = node.innerHTML;
                }
                else // is code
                {
                    html = this.getHighlightedHtml(rawContent);
                }
            }
            this.setState({html});
        }
    };

    onRawFileButtonClick = async () =>
    {
        const {match: {params: {username, repository, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repository}, path!, commitHash);
        if (rawFile !== null)
        {
            this.startDownload(rawFile);
        }
    };

    startDownload = (blob: Blob) =>
    {
        const {match: {params: {path}}} = this.props;
        const url = URL.createObjectURL(blob);
        File.startDownload(url, basename(path!));
        URL.revokeObjectURL(url);
    };

    getFileNameFromPath = (path: string) =>
    {
        const pathSplit = path.split('/');
        return pathSplit[pathSplit.length - 1];
    };

    getHighlightedHtml = (rawContent: string): string =>
    {
        const {isBinary} = this.state;
        if (!isBinary)
        {
            const pre = document.createElement('pre');
            const node = document.createElement('div');
            node.append(pre);
            pre.innerText = rawContent;
            if (rawContent.length <= 50 * 1024)    // 小于 50K 执行高亮
            {
                hljs.highlightBlock(pre);
                return node.innerHTML;
            }
            else    // 大于 50K 就不再高亮
            {
                return node.innerHTML;
            }
        }
        return rawContent;
    };

    isMarkdown = (fileName: string) =>
    {
        const ext = path.extname(fileName);
        return ext === '.md' || ext === '.markdown';
    };

    render()
    {
        const {match: {params: {path}}} = this.props;
        const {isBinary, exists, isOversize, lastCommit, loading, html} = this.state;
        const fileName = this.getFileNameFromPath(path!);

        return (
            <View html={html} exists={exists} isBinary={isBinary} isOversize={isOversize} lastCommit={lastCommit}
                  fileName={fileName} loading={loading} onRawFileButtonClick={this.onRawFileButtonClick} />
        );

    }
}

export default withRouter(FileReader);