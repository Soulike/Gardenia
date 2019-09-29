import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {connect} from 'react-redux';
import {Profile as ProfileClass} from '../../Class';
import {Account, Profile as ProfileApi} from '../../Api';
import {setLoggedInAction} from './Action/Action';

interface Props
{
    children?: ReactNode,
    isLoggedIn: boolean,
    setLoggedIn: () => any;
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
        // 检查是不是已经登录了
        const result = await Account.checkSession();
        if (result !== null && result.isValid)
        {
            const {setLoggedIn} = this.props;
            setLoggedIn();
            const profile = await ProfileApi.get();
            if (profile !== null)
            {
                this.setState({profile});
            }
        }
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {isLoggedIn} = this.props;
        const {isLoggedIn: prevIsLoggedIn} = prevProps;
        if (!prevIsLoggedIn && isLoggedIn)   // 由未登录变为登录，就请求用户信息
        {
            const profile = await ProfileApi.get();
            if (profile !== null)
            {
                this.setState({profile});
            }
        }
    }

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

const mapStateToProps = (state: any) =>
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