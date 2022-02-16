import React, {PureComponent} from 'react';
import View from './View';
import {Repository} from '../../../../../../Class';

import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {Group as GroupApi} from '../../../../../../Api';
import {EVENT, eventEmitter} from './EVENT';

interface IProps extends RouteComponentProps<RouterInterface.IGroupSettingsRepositories> {}

interface IState
{
    repositories: Repository[],
    loading: boolean,
}

class Repositories extends PureComponent<IProps, IState>
{
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            repositories: [],
            loading: false,
        };

        eventEmitter.on(EVENT.repositoryChange, this.onRepositoryChange);
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadRepositories();
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {id}}} = this.props;
        const {match: {params: {id: prevId}}} = prevProps;
        if (id !== prevId)
        {
            await this.componentDidMount();
        }
    }

    componentWillUnmount()
    {
        eventEmitter.removeListener(EVENT.repositoryChange, this.onRepositoryChange);
    }

    onRepositoryChange = async () => await this.componentDidMount();

    loadRepositories = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const repositories = await GroupApi.repositories({id: Number.parseInt(id)});
        if (repositories !== null)
        {
            this.setStatePromise({repositories: Array.from(repositories)});
        }
    };

    render()
    {
        const {repositories, loading} = this.state;
        return (<View repositories={repositories} loading={loading} />);
    }
}

export default withRouter(Repositories);