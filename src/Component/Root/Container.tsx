import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {connect} from 'react-redux';
import {Profile as ProfileClass} from '../../Class';
import {Account, Profile as ProfileApi} from '../../Api';
import {setLoggedInAction} from './Action/Action';
import {RootState, State as StoreState} from '../../Store';
import {AnyAction} from 'redux';

interface Props
{
    children?: ReactNode,
    isLoggedIn: RootState['isLoggedIn']
    setLoggedIn: () => AnyAction;
}

interface State
{
    profile: ProfileClass
}

class Root extends PureComponent<Props, State>
{
    constructor(props: Props)
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

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
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

    render()
    {
        const {children, isLoggedIn} = this.props;
        const {profile: {username}} = this.state;
        return (
            <View isLoggedIn={isLoggedIn} username={username}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);