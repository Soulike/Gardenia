import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {connect} from 'react-redux';
import {Profile as ProfileClass} from '../../Class';
import {Account, Profile as ProfileApi} from '../../Api';
import {setLoggedInAction, setLoggedOutAction} from './Action/Action';
import {IRootState, IState as StoreState} from '../../Store';
import {AnyAction} from 'redux';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {notification} from 'antd';

interface IProps
{
    children?: ReactNode,
    isLoggedIn: IRootState['isLoggedIn']
    setLoggedIn: () => AnyAction;
    setLoggedOut: () => AnyAction;
}

interface IState
{
    profile: ProfileClass
}

class Root extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            profile: new ProfileClass('', '', 'example@example.com', ''),
        };
    }

    async componentDidMount()
    {
        await this.checkSession();
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            await this.loadProfile();
        }
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {isLoggedIn} = this.props;
        const {isLoggedIn: prevIsLoggedIn} = prevProps;
        if (!prevIsLoggedIn && isLoggedIn)   // 由未登录变为登录，就请求用户信息
        {
            await this.loadProfile();
        }
    }

    checkSession = async () =>
    {
        const result = await Account.checkSession();
        if (result !== null && result.isValid)
        {
            const {setLoggedIn} = this.props;
            setLoggedIn();
        }
    };

    loadProfile = async () =>
    {
        const profile = await ProfileApi.get();
        if (profile !== null)
        {
            this.setState({profile});
        }
    };

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
        const {children, isLoggedIn} = this.props;
        const {profile: {username}} = this.state;
        return (
            <View isLoggedIn={isLoggedIn} username={username} onLogoutClick={this.onLogoutClick}>
                {children}
            </View>
        );
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {
        isLoggedIn,
    };
};

const mapDispatchToProps = {
    setLoggedIn: setLoggedInAction,
    setLoggedOut: setLoggedOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);