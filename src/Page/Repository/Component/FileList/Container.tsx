import React, {PureComponent} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {ObjectType} from '../../../../CONSTANT';
import {Commit} from '../../../../Class';

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
    fileList: Array<{ type: ObjectType, path: string, commit: Commit }>,
    lastCommit: Commit,
    loading: boolean,
}

class FileList extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            fileList: [],
            lastCommit: new Commit('', '', '', '', ''),
            loading: true,
        };
    }

    async componentDidMount()
    {
        const {match: {params: {username, repository: name, path}}, branch, location: {pathname}} = this.props;
        this.setState({loading: true});
        const [fileList, lastCommit] = await Promise.all([
            RepositoryInfo.directory(
                username, name, branch,
                path === undefined ? '' : pathname.slice(-1) === '/' ? path + '/' : path),
            RepositoryInfo.lastCommit(username, name, branch),
        ]);
        this.setState({loading: false});

        if (fileList !== null)
        {
            this.setState({fileList});
        }
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
        }
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {branch: prevBranch} = prevProps;
        const {branch} = this.props;
        const {match: {params: {path: prevPath}}} = prevProps;
        const {match: {params: {path}}} = this.props;
        if (branch !== prevBranch)
        {
            await this.componentDidMount();
        }
        else if (prevPath !== path)
        {
            const {match: {params: {username, repository: name, path}}, branch, location: {pathname}} = this.props;
            this.setState({loading: true});
            const fileList = await RepositoryInfo.directory(
                username, name, branch,
                path === undefined ? '' : pathname.slice(-1) === '/' ? path + '/' : path);
            this.setState({loading: false});

            if (fileList !== null)
            {
                this.setState({fileList});
            }
        }
    }

    render()
    {
        const {fileList, lastCommit, loading} = this.state;
        return (<View fileList={fileList} lastCommit={lastCommit} loading={loading} />);
    }
}

const mapStateToProps = (state: any) =>
{
    const {Repository: {branch}} = state;
    return {branch};
};

export default withRouter(connect(mapStateToProps)(FileList));