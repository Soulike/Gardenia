import React, {PureComponent} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Commit} from '../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits> {}

interface IState
{
    branches: Readonly<string[]>;
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
        const branches = await RepositoryInfo.branch({username}, {name: repositoryName});
        if (branches !== null)
        {
            this.setState({branches: [...branches]});
        }
    };

    loadCommits = async () =>
    {
        const {match: {params: {username, repository: repositoryName, branch}}} = this.props;
        const result = await RepositoryInfo.commitHistory({username, name: repositoryName}, branch);
        if (result !== null)
        {
            const {commits} = result;
            this.setState({commits: [...commits]});
        }
    };

    render()
    {
        const {branches, loading, commits} = this.state;
        return (<View branches={branches} loading={loading} commits={commits} />);
    }
}

export default withRouter(Commits);