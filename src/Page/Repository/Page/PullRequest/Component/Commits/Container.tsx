import React, {Component} from 'react';
import {Commit} from '../../../../../../Class';
import View from './View';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
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
    commits: Commit[],
    loading: boolean,
}

class Commits extends Component<IProps, IState>
{
    private static COMMIT_AMOUNT_PER_PAGE = 50;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commits: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        const {loading} = this.props;
        if (!loading)
        {
            await this.init();
            this.setState({loading: true, commits: []});
            await this.loadMoreCommits();
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

    init = async () =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState({commits: []}, () => resolve());
        });
    };

    loadMoreCommits = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const {commits} = this.state;
        const commitsWrapper = await PullRequestApi.getCommits({id}, commits.length, Commits.COMMIT_AMOUNT_PER_PAGE);
        if (commitsWrapper !== null)
        {
            const {commits: moreCommits} = commitsWrapper;
            if (moreCommits.length === 0)
            {
                notification.success({message: '已加载所有提交历史'});
            }
            else
            {
                this.setState({commits: [...commits, ...moreCommits]});
            }
        }
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        await this.setState({loading: true});
        await this.loadMoreCommits();
        await this.setState({loading: false});
    };

    render()
    {
        const {commits, loading} = this.state;
        const {loading: pullRequestIsLoading, pullRequest: {sourceRepositoryUsername, sourceRepositoryName}} = this.props;
        return (<View sourceRepository={{username: sourceRepositoryUsername, name: sourceRepositoryName}}
                      onLoadMoreButtonClick={this.onLoadMoreButtonClick}
                      commits={commits}
                      loading={loading || pullRequestIsLoading} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

export default connect(mapStateToProps, {})(withRouter(Commits));