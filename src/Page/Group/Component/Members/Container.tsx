import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../Router';
import {Group as GroupApi, Profile as ProfileApi} from '../../../../Api';
import {Account, Profile} from '../../../../Class';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {notification} from 'antd';

import {EVENT, eventEmitter} from './EVENT';

interface IProps extends RouteComponentProps<RouterInterface.IGroup> {}

interface IState
{
    accounts: Readonly<Account[]>,
    admins: Readonly<Account[]>,
    profiles: (Profile | null)[],
    loading: boolean,
    isAdmin: boolean,
}

class Members extends PureComponent<Readonly<IProps>, IState>
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

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            accounts: [],
            admins: [],
            profiles: [],
            loading: true,
            isAdmin: false,
        };

        eventEmitter.on(EVENT.addMember, this.onAddMemberListener);
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await Promise.all([
            this.loadAccounts(),
            this.loadAdmins(),
            this.loadIsAdmin(),
        ]);
        await this.loadProfiles();
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<Readonly<IProps>>, prevState: Readonly<IState>, snapshot?: any)
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
        eventEmitter.removeListener(EVENT.addMember, this.onAddMemberListener);
    }

    onAddMemberListener = async () => await this.componentDidMount();

    // 在删除成员后的本地更改
    removeAccount = async (username: string) =>
    {
        const {accounts: prevAccounts, profiles: prevProfiles, admins: prevAdmins} = this.state;
        const accounts = prevAccounts.filter(
            ({username: usernameInAccount}) => usernameInAccount !== username);
        const profiles = prevProfiles.filter(
            (profile) => profile !== null && profile.username !== username);
        const admins = prevAdmins.filter(
            ({username: usernameInAccount}) => usernameInAccount !== username);
        await this.setStatePromise({accounts, profiles, admins});
    };

    // 在添加管理员后的本地更改
    addAdmin = async (username: string) =>
    {
        const {accounts, admins: prevAdmin} = this.state;
        const admins = Array.from(prevAdmin);
        for (const account of accounts)
        {
            if (account.username === username)
            {
                admins.push(account);
                break;
            }
        }
        await this.setStatePromise({admins});
    };

    // 在删除管理员后的本地更改
    removeAdmin = async (username: string) =>
    {
        const {admins: prevAdmins} = this.state;
        const admins = prevAdmins.filter(
            ({username: usernameInAccount}) => usernameInAccount !== username);
        await this.setStatePromise({admins});
    };

    loadIsAdmin = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const isAdminWrapper = await GroupApi.isAdmin({id: Number.parseInt(id)});
        if (isAdminWrapper !== null)
        {
            const {isAdmin} = isAdminWrapper;
            await this.setStatePromise({isAdmin});
        }
    };

    loadAccounts = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const accounts = await GroupApi.accounts({id: Number.parseInt(id)});
        if (accounts !== null)
        {
            await this.setStatePromise({accounts});
        }
    };

    loadAdmins = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const admins = await GroupApi.admins({id: Number.parseInt(id)});
        if (admins !== null)
        {
            await this.setStatePromise({admins});
        }
    };

    loadProfiles = async () =>
    {
        const {accounts} = this.state;
        const profiles = await Promise.all(accounts.map(({username}) => ProfileApi.get({username})));
        await this.setStatePromise({profiles});
    };

    onRemoveAccountConfirm: (username: string) => PopconfirmProps['onConfirm'] = username =>
    {
        const {match: {params: {id}}} = this.props;
        return async () =>
        {
            await this.setStatePromise({loading: true});
            const result = await GroupApi.removeAccounts({id: Number.parseInt(id)}, [username]);
            if (result !== null)
            {
                notification.success({message: '移除成员成功'});
                await this.removeAccount(username);
            }
            await this.setStatePromise({loading: false});
        };
    };

    onSetAdminConfirm: (username: string) => PopconfirmProps['onConfirm'] = username =>
    {
        const {match: {params: {id}}} = this.props;
        return async () =>
        {
            await this.setStatePromise({loading: true});
            const result = await GroupApi.addAdmin({id: Number.parseInt(id)}, {username});
            if (result !== null)
            {
                notification.success({message: `成功设置 ${username} 为管理员`});
                await this.addAdmin(username);
            }
            await this.setStatePromise({loading: false});
        };
    };

    onRemoveAdminConfirm: (username: string) => PopconfirmProps['onConfirm'] = username =>
    {
        const {match: {params: {id}}} = this.props;
        return async () =>
        {
            await this.setStatePromise({loading: true});
            const result = await GroupApi.removeAdmins({id: Number.parseInt(id)}, [username]);
            if (result !== null)
            {
                notification.success({message: `成功撤销 ${username} 的管理员身份`});
                await this.removeAdmin(username);
            }
            await this.setStatePromise({loading: false});
        };
    };

    render()
    {
        const {profiles, loading, isAdmin, admins} = this.state;
        return (<View profiles={profiles}
                      loading={loading}
                      isAdmin={isAdmin}
                      adminUsernames={admins.map(({username}) => username)}
                      onRemoveAccountConfirm={this.onRemoveAccountConfirm}
                      onSetAdminConfirm={this.onSetAdminConfirm}
                      onRemoveAdminConfirm={this.onRemoveAdminConfirm} />);
    }
}

export default withRouter(Members);