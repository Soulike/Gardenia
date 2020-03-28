import React, {PureComponent} from 'react';
import View from './View';
import {Commit, Repository} from '../../../../../../Class';
import {promisify} from 'util';
import {RepositoryInfo} from '../../../../../../Api';

interface IProps
{
    repository: Readonly<Pick<Repository, 'username' | 'name'>>
}

interface IState
{
    lastCommit: Commit | null,
    loading: boolean,
}

class LastUpdateInfo extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            lastCommit: null,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadLastCommit();
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {repository} = this.props;
        const {repository: prevRepository} = prevProps;
        if (repository !== prevRepository)
        {
            await this.componentDidMount();
        }
    }

    loadLastCommit = async () =>
    {
        const {repository: {username, name}} = this.props;
        const lastCommit = await RepositoryInfo.lastCommit({username, name});
        await this.setStatePromise({lastCommit});
    };

    render()
    {
        const {loading, lastCommit} = this.state;
        return (<View lastCommit={lastCommit} loading={loading} />);
    }
}

export default LastUpdateInfo;