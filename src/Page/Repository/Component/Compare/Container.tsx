import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    commitAmount: number,
    fileDiffAmount: number,
    loading: boolean;
}

class Compare extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commitAmount: 0,
            fileDiffAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.checkURLParameters();
        this.setState({loading: true});
        await Promise.all([
            this.loadCommitAmount(),
            this.loadFileDiffAmount(),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prevPathName}} = prevProps;
        if (pathname !== prevPathName)
        {
            await this.componentDidMount();
        }
    }

    checkURLParameters = () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName,
                    sourceRepositoryBranch, targetRepositoryBranch,
                },
            },
            history,
        } = this.props;
        if (sourceRepositoryUsername === undefined || sourceRepositoryName === undefined
            || sourceRepositoryBranch === undefined || targetRepositoryBranch === undefined)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    loadCommitAmount = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        if (sourceRepositoryUsername === targetRepositoryUsername
            && sourceRepositoryName === targetRepositoryName
            && sourceRepositoryBranch === targetRepositoryBranch)
        {
            this.setState({commitAmount: 0});
        }
        else
        {
            const commitAmountWrapper = await RepositoryInfo.forkCommitAmount(
                {username: sourceRepositoryUsername, name: sourceRepositoryName},
                sourceRepositoryBranch,
                {username: targetRepositoryUsername, name: targetRepositoryName},
                targetRepositoryBranch);
            if (commitAmountWrapper !== null)
            {
                const {commitAmount} = commitAmountWrapper;
                this.setState({commitAmount});
            }
        }
    };

    loadFileDiffAmount = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        if (sourceRepositoryUsername === targetRepositoryUsername
            && sourceRepositoryName === targetRepositoryName
            && sourceRepositoryBranch === targetRepositoryBranch)
        {
            this.setState({fileDiffAmount: 0});
        }
        else
        {
            const fileDiffAmountWrapper = await RepositoryInfo.forkFileDiffAmount(
                {username: sourceRepositoryUsername, name: sourceRepositoryName},
                sourceRepositoryBranch,
                {username: targetRepositoryUsername, name: targetRepositoryName},
                targetRepositoryBranch);
            if (fileDiffAmountWrapper !== null)
            {
                const {amount} = fileDiffAmountWrapper;
                this.setState({fileDiffAmount: amount});
            }
        }
    };

    render()
    {
        const {commitAmount, fileDiffAmount, loading} = this.state;
        return (<View fileDiffAmount={fileDiffAmount} loading={loading} commitAmount={commitAmount} />);
    }
}

export default withRouter(Compare);