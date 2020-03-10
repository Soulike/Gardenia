import React, {PureComponent} from 'react';
import View from './View';
import {ISSUE_STATUS} from '../../../../CONSTANT';
import {ButtonProps} from 'antd/lib/button';
import {Issue} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Issue as IssueApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryIssues> {}

interface IState
{
    loading: boolean,
    openAmount: number,
    closedAmount: number,
    currentStatus: ISSUE_STATUS | undefined,
    issues: Issue[],
    currentPageNumber: number,
}

class Issues extends PureComponent<IProps, IState>
{
    private static readonly SIZE_PER_PAGE = 20;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: false,
            openAmount: 0,
            closedAmount: 0,
            currentStatus: ISSUE_STATUS.OPEN,
            issues: [],
            currentPageNumber: 0,
        };
    }

    async componentDidMount()
    {
        const {currentStatus} = this.state;
        this.setState({loading: true});
        await Promise.all([
            this.loadOpenAmount(),
            this.loadClosedAmount(),
            this.loadIssues(currentStatus, 0, Issues.SIZE_PER_PAGE),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const {match: {params: {username: prevUsername, repository: prevName}}} = prevProps;
        if (username !== prevUsername || name !== prevName)
        {
            await this.componentDidMount();
        }
    }

    loadOpenAmount = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const amountWrapper = await IssueApi.getAmountByRepository({username, name}, ISSUE_STATUS.OPEN);
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({openAmount: amount});
        }
    };

    loadClosedAmount = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const amountWrapper = await IssueApi.getAmountByRepository({username, name}, ISSUE_STATUS.CLOSED);
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({closedAmount: amount});
        }
    };

    onStatusButtonClick: (status: ISSUE_STATUS | undefined) => ButtonProps['onClick'] = status =>
    {
        return async () =>
        {
            this.setState({currentStatus: status, loading: true, currentPageNumber: 0});
            switch (status)
            {
                case ISSUE_STATUS.OPEN:
                {
                    await this.loadOpenAmount();
                    break;
                }
                case ISSUE_STATUS.CLOSED:
                {
                    await this.loadClosedAmount();
                    break;
                }
                default:
                {
                    await Promise.all([
                        this.loadOpenAmount(),
                        this.loadClosedAmount(),
                    ]);
                    break;
                }
            }
            await this.loadIssues(status, 0, Issues.SIZE_PER_PAGE);
            this.setState({loading: false});
        };
    };

    loadIssues = async (status: ISSUE_STATUS | undefined, offset: number, limit: number) =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const issuesWrapper = await IssueApi.getByRepository({
            username, name: repositoryName,
        }, status, offset, limit);
        if (issuesWrapper !== null)
        {
            const {issues} = issuesWrapper;
            this.setState({issues});
        }
    };

    onPrevButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {currentPageNumber, currentStatus} = this.state;
        if (currentPageNumber > 0)
        {
            this.setState({loading: true});
            await this.loadIssues(currentStatus, (currentPageNumber - 1) * Issues.SIZE_PER_PAGE, Issues.SIZE_PER_PAGE);
            this.setState({currentPageNumber: currentPageNumber - 1, loading: false});
        }
    };

    onNextButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {currentPageNumber, currentStatus} = this.state;
        this.setState({loading: true});
        await this.loadIssues(currentStatus, (currentPageNumber + 1) * Issues.SIZE_PER_PAGE, Issues.SIZE_PER_PAGE);
        this.setState({currentPageNumber: currentPageNumber + 1, loading: false});
    };

    setNoNextPage = (): boolean =>
    {
        const {currentStatus, currentPageNumber, openAmount, closedAmount} = this.state;
        switch (currentStatus)
        {
            case ISSUE_STATUS.CLOSED:
            {
                return (currentPageNumber + 1) * Issues.SIZE_PER_PAGE >= closedAmount;
            }
            case ISSUE_STATUS.OPEN:
            {
                return (currentPageNumber + 1) * Issues.SIZE_PER_PAGE >= openAmount;
            }
            default:
            {
                return (currentPageNumber + 1) * Issues.SIZE_PER_PAGE >= openAmount + closedAmount;
            }
        }
    };

    render()
    {
        const {loading, closedAmount, currentStatus, openAmount, issues, currentPageNumber} = this.state;
        return (<View loading={loading}
                      closedAmount={closedAmount}
                      currentStatus={currentStatus}
                      onStatusButtonClick={this.onStatusButtonClick}
                      openAmount={openAmount}
                      issues={issues}
                      currentPageNumber={currentPageNumber}
                      noNextPage={this.setNoNextPage()}
                      onNextButtonClick={this.onNextButtonClick}
                      onPrevButtonClick={this.onPrevButtonClick} />);
    }
}

export default withRouter(Issues);