import React, {PureComponent} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Branch, Commit} from '../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits> {}

interface IState
{
    branches: Readonly<Branch[]>;
    loading: boolean;
    commits: Commit[];
}

class Commits extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            branches: [],
            loading: false,
            commits: [],
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadBranches();
        await this.loadCommits();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {branch: prevBranch}}} = prevProps;
        const {match: {params: {branch}}} = this.props;
        if (branch !== prevBranch)
        {
            this.setState({loading: true});
            await this.loadCommits();
            this.setState({loading: false});
        }
    }

    loadBranches = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const result = await RepositoryInfo.branches({username, name: repositoryName});
        if (result !== null)
        {
            const {branches} = result;
            this.setState({branches});
        }
    };

    loadCommits = async () =>
    {
        const {match: {params: {username, repository: repositoryName, branch, path}}} = this.props;
        let result: { commits: Commit[] } | null;
        if (typeof path === 'string')
        {
            result = await RepositoryInfo.fileCommitHistory({username, name: repositoryName}, path, branch);
        }
        else
        {
            result = await RepositoryInfo.commitHistory({username, name: repositoryName}, branch);
        }
        if (result !== null)
        {
            const {commits} = result;
            this.setState({commits: commits});
        }
    };

    render()
    {
        const {branches, loading, commits} = this.state;
        const {match: {params: {repository: repositoryName, path}}} = this.props;
        return (<View branches={branches}
                      loading={loading}
                      commits={commits}
                      path={path}
                      repositoryName={repositoryName} />);
    }
}

export default withRouter(Commits);