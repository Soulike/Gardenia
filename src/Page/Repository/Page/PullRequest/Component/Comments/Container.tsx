import React, {Component} from 'react';
import View from './View';
import {PullRequestComment} from '../../../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {IPullRequestState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';

import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';

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
    private static COMMENT_AMOUNT_PER_PAGE = 25;
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

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
        await this.init();
        if (!loading)
        {
            await this.setStatePromise({loading: true});
            await Promise.all([
                this.loadIsMergeable(),
                this.loadMorePullRequestComments(),
            ]);
            await this.setStatePromise({loading: false});
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

    init = async () =>
    {
        await this.setStatePromise({pullRequestComments: []});
    };

    onLoadMoreClick: ButtonProps['onClick'] = async () =>
    {
        await this.setStatePromise({loading: true});
        await this.loadMorePullRequestComments();
        await this.setStatePromise({loading: false});
    };

    loadMorePullRequestComments = async () =>
    {
        const {pullRequest: {targetRepositoryUsername, targetRepositoryName, no}} = this.props;
        const {pullRequestComments} = this.state;
        const pullRequestCommentsWrapper = await PullRequestApi.getComments(
            {username: targetRepositoryUsername, name: targetRepositoryName},
            {no},
            pullRequestComments.length, Comments.COMMENT_AMOUNT_PER_PAGE,
        );
        if (pullRequestCommentsWrapper !== null)
        {
            const {pullRequestComments} = this.state;
            const {comments} = pullRequestCommentsWrapper;
            if (comments.length > 0)
            {
                await this.setStatePromise({pullRequestComments: [...pullRequestComments, ...comments]});
            }
            else if (pullRequestComments.length > 0)
            {
                notification.success({message: '已加载所有评论'});
            }
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
                await this.setStatePromise({isMergeable});
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
                      pullRequest={pullRequest} onLoadMoreClick={this.onLoadMoreClick} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

export default withRouter(connect(mapStateToProps, {})(Comments));