import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Commit} from '../../../../Class';
import {Repository, RepositoryInfo} from '../../../../Api';
import {connect} from 'react-redux';
import hljs from 'highlight.js';

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
    isBinary: boolean,
    rawContent: string,
    lastCommit: Commit,
    loading: boolean,
}

class FileReader extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            isBinary: false,
            rawContent: '',
            lastCommit: new Commit('', '', '', '', ''),
            loading: true,
        };
    }

    async componentDidMount()
    {
        const {match: {params: {username, repository: name, path}}, branch} = this.props;
        this.setState({loading: true});
        const lastCommit = await RepositoryInfo.lastCommit(username, name, branch, path);
        this.setState({loading: false});
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
            const {commitHash} = lastCommit;
            this.setState({loading: true});
            const rawContentWrapper = await Repository.getFile(username, name, path, commitHash);
            this.setState({loading: false});
            if (rawContentWrapper !== null)
            {
                const {isBinary, content} = rawContentWrapper;
                if (isBinary)
                {
                    this.setState({isBinary});
                }
                else
                {
                    this.setState({rawContent: content!});
                }
            }
        }
    }

    render()
    {
        const {match: {params: {path}}} = this.props;
        const pathSplit = path.split('/');
        const {isBinary, rawContent, lastCommit, loading} = this.state;
        let html = '';
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        pre.append(code);
        code.innerText = rawContent;
        if (isBinary)
        {
            html = `<p style={{textAlign: 'center'}}>二进制文件无法显示</p>`;
        }
        else if (rawContent.length <= 50 * 1024)    // 小于 50K 执行高亮
        {
            const node = document.createElement('div');
            node.append(pre);
            hljs.highlightBlock(pre);
            html = node.innerHTML;
        }
        else    // 大于 50K 就不再高亮
        {
            html = rawContent;
        }
        return (
            <View html={html}
                  lastCommit={lastCommit}
                  fileName={pathSplit[pathSplit.length - 1]} loading={loading} />
        );

    }
}

const mapStateToProps = (state: any) =>
{
    const {Repository: {branch}} = state;
    return {branch};
};

export default withRouter(connect(mapStateToProps)(FileReader));