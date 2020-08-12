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
    commitAmount: number,
    fileDiffAmount: number,
    loading: boolean,
}

class PullRequest extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            isMergeable: false,
            commitAmount: 0,
            fileDiffAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.loadPullRequest();
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {no, repositoryName, username}}, loading, pullRequest} = this.props;
        const {match: {params: {no: prevNo, repositoryName: prevRepositoryName, username: prevUsername}}, pullRequest: prevPullRequest} = prevProps;
        if (no !== prevNo || repositoryName !== prevRepositoryName || username !== prevUsername)
        {
            await this.componentDidMount();
        }
        if (!loading && pullRequest !== prevPullRequest)
        {
            this.setState({loading: true});
            await Promise.all([
                this.loadCommitAmount(),
                this.loadFileDiffAmount(),
            ]);
            this.setState({loading: false});
        }
    }

    loadPullRequest = async () =>
    {
        const {match: {params: {no: noString, repositoryName, username}}, history, loadedPullRequest, loadingPullRequest} = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        await loadingPullRequest();
        const pullRequest = await PullRequestApi.get({username, name: repositoryName}, {no});
        if (pullRequest !== null)
        {
            await loadedPullRequest(pullRequest);
        }
        else
        {
            return history.push(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    loadCommitAmount = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const commitAmountWrapper = await PullRequestApi.getCommitAmount({id});
        if (commitAmountWrapper !== null)
        {
            const {commitAmount} = commitAmountWrapper;
            this.setState({commitAmount});
        }
    };

    loadFileDiffAmount = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const fileDiffAmountWrapper = await PullRequestApi.getFileDiffAmount({id});
        if (fileDiffAmountWrapper !== null)
        {
            const {amount} = fileDiffAmountWrapper;
            this.setState({fileDiffAmount: amount});
        }
    };

    render()
    {
        const {pullRequest, loading: pullRequestIsLoading} = this.props;
        const {loading, fileDiffAmount, commitAmount} = this.state;
        return (<View loading={loading || pullRequestIsLoading}
                      pullRequest={pullRequest}
                      commitAmount={commitAmount}
                      fileDiffAmount={fileDiffAmount} />);
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