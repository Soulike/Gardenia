import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff} from '../../../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RepositoryInfo} from '../../../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    fileDiffs: FileDiff[];
    fileDiffAmount: number;
    loading: boolean;
}

class PullRequestDiffs extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileDiffs: [],
            fileDiffAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await Promise.all([
            this.loadFileDiffAmount(),
            this.loadFileDiffs(),
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
    };

    loadFileDiffs = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        const fileDiffsWrapper = await RepositoryInfo.forkFileDiff(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch);
        if (fileDiffsWrapper !== null)
        {
            const {fileDiffs} = fileDiffsWrapper;
            this.setState({fileDiffs});
        }
    };

    render()
    {
        const {fileDiffs, loading, fileDiffAmount} = this.state;
        return (<View fileDiffs={fileDiffs} loading={loading} fileDiffAmount={fileDiffAmount} />);
    }
}

export default withRouter(PullRequestDiffs);