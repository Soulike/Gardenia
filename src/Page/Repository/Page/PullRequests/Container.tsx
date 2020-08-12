import React, {PureComponent} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../Api/RepositoryInfo';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Branch, PullRequest} from '../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../Api';
import {PULL_REQUEST_STATUS} from '../../../../CONSTANT';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequests> {}

interface IState
{
    branches: Branch[],
    loading: boolean,
    openAmount: number,
    closedAmount: number,
    mergedAmount: number,
    pullRequests: PullRequest[],
    currentStatus: PULL_REQUEST_STATUS | undefined,
    currentPageNumber: number,
}

class PullRequests extends PureComponent<IProps, IState>
{
    private static readonly SIZE_PER_PAGE = 20;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            branches: [],
            loading: false,
            openAmount: 0,
            closedAmount: 0,
            mergedAmount: 0,
            pullRequests: [],
            currentStatus: PULL_REQUEST_STATUS.OPEN,
            currentPageNumber: 0,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await Promise.all([
            this.loadBranches(),
            this.loadOpenAmount(),
            this.loadClosedAmount(),
            this.loadMergedAmount(),
            this.loadPullRequests(PULL_REQUEST_STATUS.OPEN, 0, PullRequests.SIZE_PER_PAGE),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repositoryName: name}}} = this.props;
        const {match: {params: {username: prevUsername, repositoryName: prevName}}} = prevProps;
        if (username !== prevUsername || name !== prevName)
        {
            await this.componentDidMount();
        }
    }

    onStatusButtonClick: (status: PULL_REQUEST_STATUS | undefined) => ButtonProps['onClick'] = status =>
    {
        return async () =>
        {
            this.setState({currentStatus: status, loading: true, currentPageNumber: 0});
            switch (status)
            {
                case PULL_REQUEST_STATUS.OPEN:
                {
                    await this.loadOpenAmount();
                    break;
                }
                case PULL_REQUEST_STATUS.MERGED:
                {
                    await this.loadMergedAmount();
                    break;
                }
                case PULL_REQUEST_STATUS.CLOSED:
                {
                    await this.loadClosedAmount();
                    break;
                }
                default:
                {
                    await Promise.all([
                        this.loadOpenAmount(),
                        this.loadClosedAmount(),
                        this.loadMergedAmount(),
                    ]);
                    break;
                }
            }
            await this.loadPullRequests(status, 0, PullRequests.SIZE_PER_PAGE);
            this.setState({loading: false});
        };
    };

    onPrevButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {currentPageNumber, currentStatus} = this.state;
        if (currentPageNumber > 0)
        {
            this.setState({loading: true});
            await this.loadPullRequests(currentStatus, (currentPageNumber - 1) * PullRequests.SIZE_PER_PAGE, PullRequests.SIZE_PER_PAGE);
            this.setState({currentPageNumber: currentPageNumber - 1, loading: false});
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    onNextButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {currentPageNumber, currentStatus} = this.state;
        this.setState({loading: true});
        await this.loadPullRequests(currentStatus, (currentPageNumber + 1) * PullRequests.SIZE_PER_PAGE, PullRequests.SIZE_PER_PAGE);
        this.setState({currentPageNumber: currentPageNumber + 1, loading: false});
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    loadPullRequests = async (status: PULL_REQUEST_STATUS | undefined, offset: number, limit: number) =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const pullRequestsWrapper = await PullRequestApi.getByRepository({
            username, name: repositoryName,
        }, status, offset, limit);
        if (pullRequestsWrapper !== null)
        {
            const {pullRequests} = pullRequestsWrapper;
            this.setState({pullRequests});
        }
    };

    loadBranches = async () =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const result = await RepositoryInfo.branches({username, name: repositoryName});
        if (result !== null)
        {
            const {branches} = result;
            this.setState({branches});
        }
    };

    loadOpenAmount = async () =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const amountWrapper = await PullRequestApi.getPullRequestAmount({
            username,
            name: repositoryName,
        }, PULL_REQUEST_STATUS.OPEN);
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({openAmount: amount});
        }
    };

    loadClosedAmount = async () =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const amountWrapper = await PullRequestApi.getPullRequestAmount({
            username,
            name: repositoryName,
        }, PULL_REQUEST_STATUS.CLOSED);
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({closedAmount: amount});
        }
    };

    loadMergedAmount = async () =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const amountWrapper = await PullRequestApi.getPullRequestAmount({
            username,
            name: repositoryName,
        }, PULL_REQUEST_STATUS.MERGED);
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({mergedAmount: amount});
        }
    };

    setNoNextPage = (): boolean =>
    {
        const {currentStatus, currentPageNumber, openAmount, closedAmount, mergedAmount} = this.state;
        switch (currentStatus)
        {
            case PULL_REQUEST_STATUS.CLOSED:
            {
                return (currentPageNumber + 1) * PullRequests.SIZE_PER_PAGE >= closedAmount;
            }
            case PULL_REQUEST_STATUS.MERGED:
            {
                return (currentPageNumber + 1) * PullRequests.SIZE_PER_PAGE >= mergedAmount;
            }
            case PULL_REQUEST_STATUS.OPEN:
            {
                return (currentPageNumber + 1) * PullRequests.SIZE_PER_PAGE >= openAmount;
            }
            default:
            {
                return (currentPageNumber + 1) * PullRequests.SIZE_PER_PAGE >= openAmount + closedAmount + mergedAmount;
            }
        }
    };

    render()
    {
        const {
            branches, loading,
            closedAmount, mergedAmount, openAmount,
            pullRequests, currentStatus, currentPageNumber,
        } = this.state;
        return (<View branches={branches}
                      loading={loading}
                      closedAmount={closedAmount}
                      mergedAmount={mergedAmount}
                      openAmount={openAmount}
                      pullRequests={pullRequests}
                      currentStatus={currentStatus}
                      currentPageNumber={currentPageNumber}
                      onStatusButtonClick={this.onStatusButtonClick}
                      onNextButtonClick={this.onNextButtonClick}
                      onPrevButtonClick={this.onPrevButtonClick}
                      noNextPage={this.setNoNextPage()} />);
    }
}

export default withRouter(PullRequests);