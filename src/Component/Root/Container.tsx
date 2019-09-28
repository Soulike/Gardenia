import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {connect} from 'react-redux';
import {Profile as ProfileClass} from '../../Class';
import {Profile as ProfileApi} from '../../Api';

interface Props
{
    children?: ReactNode,
    isLoggedIn: boolean,
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

export default connect(mapStateToProps)(Root);