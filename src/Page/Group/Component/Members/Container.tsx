import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../Router';
import {Group as GroupApi, Profile as ProfileApi} from '../../../../Api';
import {Profile} from '../../../../Class';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IGroup>
{

}

interface IState
{
    profiles: (Profile | null)[],
    loading: boolean,
    isAdmin: boolean,
}

class Members extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            profiles: [],
            loading: true,
            isAdmin: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await Promise.all([
            this.loadMemberProfiles(),
            this.loadIsAdmin(),
        ]);
        this.setState({loading: false});
    }

    loadMemberProfiles = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const accounts = await GroupApi.accounts({id: Number.parseInt(id)});
        if (accounts !== null)
        {
            const profiles = await Promise.all(accounts.map(({username}) => ProfileApi.get(username)));
            this.setState({profiles});
        }
    };

    loadIsAdmin = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const isAdminWrapper = await GroupApi.isAdmin({id: Number.parseInt(id)});
        if (isAdminWrapper !== null)
        {
            const {isAdmin} = isAdminWrapper;
            this.setState({isAdmin});
        }
    };

    onRemoveAccountConfirm: (username: string) => PopconfirmProps['onConfirm'] = username =>
    {
        const {match: {params: {id}}} = this.props;
        return async () =>
        {
            const result = await GroupApi.removeAccounts({id: Number.parseInt(id)}, [username]);
            if (result !== null)
            {
                notification.success({message: '移除成员成功'});
                await this.loadMemberProfiles();
            }
        };
    };

    render()
    {
        const {profiles, loading, isAdmin} = this.state;
        return (<View profiles={profiles}
                      loading={loading}
                      isAdmin={isAdmin}
                      onRemoveAccountConfirm={this.onRemoveAccountConfirm} />);
    }
}

export default withRouter(Members);