import {AnyAction} from 'redux';
import React, {PureComponent} from 'react';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {Account} from '../../../../Api/Account';
import {notification} from 'antd';
import View from './View';
import {setLoggedOutAction} from '../../Action/Action';
import {connect} from 'react-redux';

interface IState {}

interface IProps
{
    username: string,
    avatar: string,
    setLoggedOut: () => AnyAction;
}

class LoggedInMenu extends PureComponent<IProps, IState>
{
    onLogoutClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {setLoggedOut} = this.props;
        const result = await Account.logout();
        if (result !== null)
        {
            setLoggedOut();
            notification.success({message: '退出登录成功'});
        }
    };

    render()
    {
        const {username, avatar} = this.props;
        return (
            <View
                username={username}
                avatar={avatar}
                onLogoutClick={this.onLogoutClick} />
        );
    }
}

const mapDispatchToProps = {
    setLoggedOut: setLoggedOutAction,
};

export default connect(null, mapDispatchToProps)(LoggedInMenu);