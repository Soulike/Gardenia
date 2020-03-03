import React, {Component} from 'react';
import {Commit} from '../../../../../../Class';
import View from './View';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {IPullRequestState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';

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
            this.setState({loading: true});
            await this.loadCommits();
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

    loadCommits = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const commitsWrapper = await PullRequestApi.getCommits({id});
        if (commitsWrapper !== null)
        {
            const {commits} = commitsWrapper;
            this.setState({commits});
        }
    };

    render()
    {
        const {commits, loading} = this.state;
        const {loading: pullRequestIsLoading} = this.props;
        return (<View commits={commits} loading={loading || pullRequestIsLoading} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

export default connect(mapStateToProps, {})(withRouter(Commits));