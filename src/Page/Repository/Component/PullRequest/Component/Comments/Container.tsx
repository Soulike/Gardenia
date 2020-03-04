import React, {Component} from 'react';
import View from './View';
import {PullRequestComment} from '../../../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {IPullRequestState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest>
{
    pullRequest: IPullRequestState['pullRequest'],
    loading: IPullRequestState['loading'],
}

interface IState
{
    pullRequestComments: PullRequestComment[];
    loading: boolean;
    isMergeable: boolean;
}

class Comments extends Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            pullRequestComments: [],
            loading: false,
            isMergeable: false,
        };
    }

    async componentDidMount()
    {
        const {loading} = this.props;
        if (!loading)
        {
            this.setState({loading: true});
            await this.loadIsMergeable();
            await this.loadPullRequestComments();
            this.setState({loading: false});
        }
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {pullRequest, loading} = this.props;
        const {pullRequest: prevPullRequest, loading: prevLoading} = prevProps;
        if (pullRequest !== prevPullRequest || prevLoading !== loading)
        {
            await this.componentDidMount();
        }
    }

    loadPullRequestComments = async () =>
    {
        const {pullRequest: {targetRepositoryUsername, targetRepositoryName, no}} = this.props;
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
        const {pullRequest: {id, status}} = this.props;
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
        const {pullRequest, loading: pullRequestIsLoading} = this.props;
        const {pullRequestComments, loading, isMergeable} = this.state;
        return (<View isMergeable={isMergeable}
                      loading={loading || pullRequestIsLoading}
                      pullRequestComments={pullRequestComments}
                      pullRequest={pullRequest} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

export default withRouter(connect(mapStateToProps, {})(Comments));