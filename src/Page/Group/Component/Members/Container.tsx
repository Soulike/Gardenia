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
}

class Members extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            profiles: [],
            loading: true,
        };
    }

    async componentDidMount()
    {
        await this.loadMemberProfiles();
    }

    loadMemberProfiles = async () =>
    {
        const {match: {params: {id}}} = this.props;
        this.setState({loading: true});
        const accounts = await GroupApi.accounts({id: Number.parseInt(id)});
        if (accounts !== null)
        {
            const profiles = await Promise.all(accounts.map(({username}) => ProfileApi.get(username)));
            this.setState({profiles});
        }
        this.setState({loading: false});
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
        const {profiles, loading} = this.state;
        return (<View profiles={profiles} loading={loading} onRemoveAccountConfirm={this.onRemoveAccountConfirm} />);
    }
}

export default withRouter(Members);