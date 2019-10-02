import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Commit} from '../../../../Class';
import {RepositoryInfo} from '../../../../Api';
import {connect} from 'react-redux';
import hljs from 'highlight.js';
import {extname} from 'path';
import showdown from 'showdown';
import {ObjectType} from '../../../../CONSTANT';

interface Match
{
    username: string,
    repository: string,
    path: string,
}

interface Props extends RouteComponentProps<Match>
{
    branch: string,
}

interface State
{
    exists: boolean,
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Commit,
    loading: boolean,
    rawContent: string,
}

class FileReader extends PureComponent<Props, State>
{
    private static mdConverter = new showdown.Converter({
        tables: true,
        strikethrough: true,
        tasklists: true,
        emoji: true,
    });

    constructor(props: Props)
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
        const {match: {params: {username, repository: name, path}}, branch} = this.props;
        // 加载最后一次提交信息
        this.setState({loading: true});
        const lastCommit = await RepositoryInfo.lastCommit(username, name, branch, path);
        this.setState({loading: false});
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
            const {commitHash} = lastCommit;
            this.setState({loading: true});

            // 加载文件信息
            const fileInfo = await RepositoryInfo.fileInfo(username, name, path, commitHash);
            this.setState({loading: false});
            if (fileInfo !== null)
            {
                const {exists, size, type, isBinary} = fileInfo;
                this.setState({exists});
                if (exists)
                {
                    if (type === ObjectType.TREE)    // 类型并不是文件，就重定向到目录视图
                    {
                        const {location: {pathname}, history} = this.props;
                        history.replace(pathname + '/');
                        return;
                    }
                    this.setState({isBinary: isBinary!});
                    if (!isBinary && size! > 1024 * 1024)   // 不是二进制文件，但大小超过 1M
                    {
                        this.setState({isOversize: true});
                    }
                    else    // 不是二进制文件，且大小小于 1M，就加载文件内容
                    {
                        this.setState({loading: true});
                        const fileRawContent = await RepositoryInfo.rawFile(username, name, path, commitHash);
                        this.setState({loading: false});
                        if (fileRawContent !== null)
                        {
                            this.setState({rawContent: fileRawContent});
                        }
                    }
                }
            }
        }
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {branch: preBranch} = prevProps;
        const {branch} = this.props;
        if (branch !== preBranch)   // 分支切换，就重新获取文件信息
        {
            await this.componentDidMount();
        }
    }

    render()
    {
        const {match: {params: {path}}} = this.props;
        const {isBinary, exists, isOversize, rawContent, lastCommit, loading} = this.state;
        const pathSplit = path.split('/');
        const fileName = pathSplit[pathSplit.length - 1];
        let html = '';
        if (exists && !isOversize)
        {
            const ext = extname(fileName);
            if (ext === '.md' || ext === '.markdown')   // 是 markdown，就渲染出来
            {
                html = FileReader.mdConverter.makeHtml(rawContent);
            }
            else    // 是代码，就进行高亮
            {
                const pre = document.createElement('pre');
                const node = document.createElement('div');
                node.append(pre);
                pre.innerText = rawContent;
                if (!isBinary)
                {
                    if (rawContent.length <= 50 * 1024)    // 小于 50K 执行高亮
                    {
                        hljs.highlightBlock(pre);
                        html = node.innerHTML;
                    }
                    else    // 大于 50K 就不再高亮
                    {
                        html = node.innerHTML;
                    }
                }
            }
        }
        return (
            <View html={html} exists={exists} isBinary={isBinary} isOversize={isOversize} lastCommit={lastCommit}
                  fileName={fileName} loading={loading} />
        );

    }
}

const mapStateToProps = (state: any) =>
{
    const {Repository: {branch}} = state;
    return {branch};
};

export default withRouter(connect(mapStateToProps)(FileReader));