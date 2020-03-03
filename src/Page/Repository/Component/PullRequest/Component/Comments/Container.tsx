import React, {PureComponent} from 'react';
import View from './View';
import {PullRequest, PullRequestComment} from '../../../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest> {}

interface IState
{
    pullRequest: PullRequest;
    pullRequestComments: PullRequestComment[];
    loading: boolean;
    isMergeable: boolean;
}

class Comments extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            pullRequestComments: [],
            loading: false,
            pullRequest: new PullRequest(0, 0, '', '', '', '', '', '', 0, 0, '', '', PULL_REQUEST_STATUS.OPEN),
            isMergeable: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadPullRequest();
        await this.loadIsMergeable();
        await this.loadPullRequestComments();
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
            this.setState({pullRequest});
        }
    };

    loadPullRequestComments = async () =>
    {
        const {pullRequest: {targetRepositoryUsername, targetRepositoryName, no}} = this.state;
        const pullRequestCommentsWrapper = await PullRequestApi.getComments(
            {username: targetRepositoryUsername, name: targetRepositoryName},
            {no},
        );
        if (pullRequestCommentsWrapper !== null)
        {
            const {comments} = pullRequestCommentsWrapper;
            this.setState({pullRequestComments: comments});
        }
    };

    loadIsMergeable = async () =>
    {
        const {pullRequest: {id, status}} = this.state;
        if (status === PULL_REQUEST_STATUS.OPEN)
        {
            const isMergeableWrapper = await PullRequestApi.isMergeable({id});
            if (isMergeableWrapper !== null)
            {
                const {isMergeable} = isMergeableWrapper;
                this.setState({isMergeable});
            }
        }
    };

    render()
    {
        const {pullRequestComments, loading, pullRequest, isMergeable} = this.state;
        return (<View isMergeable={isMergeable}
                      loading={loading}
                      pullRequestComments={pullRequestComments}
                      pullRequest={pullRequest} />);
    }
}

export default withRouter(Comments);