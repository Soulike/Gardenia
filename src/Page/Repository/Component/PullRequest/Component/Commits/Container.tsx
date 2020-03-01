import React, {PureComponent} from 'react';
import {Commit, PullRequest} from '../../../../../../Class';
import View from './View';
import {PullRequest as PullRequestApi, RepositoryInfo} from '../../../../../../Api';
import {PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest> {}

interface IState
{
    commits: Commit[],
    loading: boolean,
    pullRequest: PullRequest,
}

class Commits extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commits: [],
            loading: false,
            pullRequest: new PullRequest(0, 0, '', '', '', '', '', '', 0, 0, '', '', PULL_REQUEST_STATUS.OPEN),
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadPullRequest();
        await this.loadCommits();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {no, username, repository}}} = this.props;
        const {match: {params: {no: prevNo, username: prevUsername, repository: prevRepository}}} = prevProps;
        if (no !== prevNo || username !== prevUsername || repository !== prevRepository)
        {
            await this.componentDidMount();
        }
    }

    loadPullRequest = async () =>
    {
        const {match: {params: {no: noString, repository: repositoryName, username}}, history} = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        const pullRequest = await PullRequestApi.get({username, name: repositoryName}, {no});
        if (pullRequest !== null)
        {
            return new Promise(resolve =>
            {
                this.setState({pullRequest}, resolve);
            });
        }
    };

    loadCommits = async () =>
    {
        const {
            pullRequest: {
                sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                targetRepositoryUsername, targetRepositoryName, targetRepositoryBranch,
            },
        } = this.state;
        const commitsWrapper = await RepositoryInfo.forkCommitHistory(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch);
        if (commitsWrapper !== null)
        {
            const {commits} = commitsWrapper;
            this.setState({commits});
        }
    };

    render()
    {
        const {commits, loading} = this.state;
        return (<View commits={commits} loading={loading} />);
    }
}

export default withRouter(Commits);