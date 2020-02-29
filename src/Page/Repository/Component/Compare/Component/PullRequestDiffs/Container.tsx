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
    loading: boolean;
}

class PullRequestDiffs extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileDiffs: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadFileDiffs();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {
            match: {
                params: {
                    username: targetRepositoryUsername, repository: targetRepositoryName,
                    targetRepositoryBranch,
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                },
            },
        } = this.props;
        const {
            match: {
                params: {
                    username: prevTargetRepositoryUsername, repository: prevTargetRepositoryName,
                    targetRepositoryBranch: prevTargetRepositoryBranch,
                    sourceRepositoryUsername: prevSourceRepositoryUsername,
                    sourceRepositoryName: prevSourceRepositoryName,
                    sourceRepositoryBranch: prevSourceRepositoryBranch,
                },
            },
        } = prevProps;
        if (targetRepositoryUsername !== prevTargetRepositoryUsername
            || targetRepositoryName !== prevTargetRepositoryName
            || targetRepositoryBranch !== prevTargetRepositoryBranch
            || sourceRepositoryUsername !== prevSourceRepositoryUsername
            || sourceRepositoryName !== prevSourceRepositoryName
            || sourceRepositoryBranch !== prevSourceRepositoryBranch)
        {
            await this.componentDidMount();
        }
    }

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
        const {fileDiffs, loading} = this.state;
        return (<View fileDiffs={fileDiffs} loading={loading} />);
    }
}

export default withRouter(PullRequestDiffs);