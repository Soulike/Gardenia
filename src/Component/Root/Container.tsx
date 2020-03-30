import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {connect} from 'react-redux';
import {Profile as ProfileClass} from '../../Class';
import {Account, Profile as ProfileApi} from '../../Api';
import {setLoggedInAction, setLoggedOutAction} from './Action/Action';
import {IRootState, IState as StoreState} from '../../Store';
import {promisify} from 'util';

interface IProps extends IRootState
{
    children?: ReactNode,
    setLoggedIn: typeof setLoggedInAction;
    setLoggedOut: typeof setLoggedOutAction;
}

interface IState
{
    profile: ProfileClass | null,
}

class Root extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            profile: null,
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
            await this.setStatePromise({profile});
        }
        else
        {
            const {setLoggedOut} = this.props;
            await setLoggedOut();
        }
    };

    render()
    {
        const {children, isLoggedIn} = this.props;
        const {profile} = this.state;
        return (
            <View isLoggedIn={isLoggedIn} profile={profile}>
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