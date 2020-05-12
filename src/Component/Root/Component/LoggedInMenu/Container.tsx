import React, {PureComponent} from 'react';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {Account} from '../../../../Api/Account';
import {notification} from 'antd';
import View from './View';
import {setLoggedOutAction} from '../../Action/Action';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG} from '../../../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IState {}

interface IProps extends RouteComponentProps
{
    username: string,
    avatar: string,
    setLoggedOut: typeof setLoggedOutAction;
}

class LoggedInMenu extends PureComponent<IProps, IState>
{
    onLogoutClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {setLoggedOut, history} = this.props;
        const result = await Account.logout();
        if (result !== null)
        {
            setLoggedOut();
            notification.success({message: '退出登录成功'});
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
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

export default connect(null, mapDispatchToProps)(withRouter(LoggedInMenu));