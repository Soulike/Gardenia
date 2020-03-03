import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../Router';
import {PullRequest as PullRequestApi} from '../../../../Api';
import {IPullRequestState, IState as StoreState} from '../../../../Store';
import {loadedAction, loadingAction} from './Action/Action';
import {connect} from 'react-redux';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest>
{
    pullRequest: IPullRequestState['pullRequest'],
    loadedPullRequest: typeof loadedAction,
    loadingPullRequest: typeof loadingAction,
    loading: IPullRequestState['loading'],
}

interface IState
{
    isMergeable: boolean,
}

class PullRequest extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            isMergeable: false,
        };
    }

    async componentDidMount()
    {
        await this.loadPullRequest();
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {no, repository: repositoryName, username}}} = this.props;
        const {match: {params: {no: prevNo, repository: prevRepositoryName, username: prevUsername}}} = this.props;
        if (no !== prevNo || repositoryName !== prevRepositoryName || username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    loadPullRequest = async () =>
    {
        const {match: {params: {no: noString, repository: repositoryName, username}}, history, loadedPullRequest, loadingPullRequest} = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        await loadingPullRequest();
        const pullRequest = await PullRequestApi.get({username, name: repositoryName}, {no});
        if (pullRequest !== null)
        {
            await loadedPullRequest(pullRequest);
        }
    };

    render()
    {
        const {pullRequest, loading} = this.props;
        return (<View loading={loading} pullRequest={pullRequest} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

const mapDispatchToProps = {
    loadedPullRequest: loadedAction,
    loadingPullRequest: loadingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PullRequest));