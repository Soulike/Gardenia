import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import View from './View';
import {Repository} from '../../../../../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    isMergeable: boolean;
    loading: boolean;
}

class IsMergeableIndicator extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            isMergeable: true,
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadIsMergeable();
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

    loadIsMergeable = async () =>
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
        const isMergeableWrapper = await Repository.isMergeable(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch,
        );
        if (isMergeableWrapper !== null)
        {
            const {isMergeable} = isMergeableWrapper;
            this.setState({isMergeable});
        }
    };

    render()
    {
        const {isMergeable, loading} = this.state;
        return (<View isMergeable={isMergeable} loading={loading} />);
    }
}

export default withRouter(IsMergeableIndicator);