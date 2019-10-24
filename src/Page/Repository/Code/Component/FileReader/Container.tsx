import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Commit} from '../../../../../Class';
import {RepositoryInfo} from '../../../../../Api';
import hljs from 'highlight.js';
import path, {basename} from 'path';
import {mdConverter} from '../../../../../Singleton';
import {ObjectType} from '../../../../../CONSTANT';
import {Interface as RouterInterface} from '../../../../../Router';
import {File} from '../../../../../Function';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    exists: boolean,
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Commit,
    loading: boolean,
    rawContent: string,
}

class FileReader extends PureComponent<IProps, IState>
{

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            exists: true,
            isBinary: false,
            isOversize: false,
            lastCommit: new Commit('', '', '', '', ''),
            loading: true,
            rawContent: '',
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadLastCommit();
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
        const lastCommit = await RepositoryInfo.lastCommit(username, name, branch!, path);
        if (lastCommit !== null)
        {
            await this.onLastCommitLoaded(lastCommit);
        }
    };

    onLastCommitLoaded = async (lastCommit: Commit) =>
    {
        this.setState({lastCommit});
        const {commitHash} = lastCommit;
        await this.loadFileInfo(commitHash);
    };

    loadFileInfo = async (commitHash: string) =>
    {
        const {match: {params: {username, repository: name, path}}} = this.props;
        const fileInfo = await RepositoryInfo.fileInfo(username, name, path!, commitHash);
        if (fileInfo !== null)
        {
            await this.onFileInfoLoaded(fileInfo, commitHash);
        }
    };

    onFileInfoLoaded = async (fileInfo: { exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }, commitHash: string) =>
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
                    await this.loadRawContent(commitHash);
                }
            }
        }
    };

    loadRawContent = async (commitHash: string) =>
    {
        const {match: {params: {username, repository: name, path}}} = this.props;
        const fileRawContent = await RepositoryInfo.rawFile(username, name, path!, commitHash);
        if (fileRawContent !== null)
        {
            this.setState({rawContent: await File.transformBlobToString(fileRawContent)});
        }
    };

    onRawFileButtonClick = async () =>
    {
        const {match: {params: {username, repository, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const rawFile = await RepositoryInfo.rawFile(username, repository, path!, commitHash);
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

    getHighlightedHtml = (): string =>
    {
        const {isBinary, rawContent} = this.state;
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
        const {isBinary, exists, isOversize, rawContent, lastCommit, loading} = this.state;
        const fileName = this.getFileNameFromPath(path!);
        let html = '';
        if (exists && !isOversize && !isBinary)
        {
            if (this.isMarkdown(fileName))
            {
                html = mdConverter.makeHtml(rawContent);
            }
            else // is code
            {
                html = this.getHighlightedHtml();
            }
        }
        return (
            <View html={html} exists={exists} isBinary={isBinary} isOversize={isOversize} lastCommit={lastCommit}
                  fileName={fileName} loading={loading} onRawFileButtonClick={this.onRawFileButtonClick} />
        );

    }
}

export default withRouter(FileReader);