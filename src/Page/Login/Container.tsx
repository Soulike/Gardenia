import React, {PureComponent} from 'react';
import LoginView from './View';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account as AccountApi} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';
import {setLoggedInAction} from '../../Component/Root/Action/Action';
import {connect} from 'react-redux';
import {Account as AccountClass} from '../../Class';
import {RootState, State as StoreState} from '../../Store';
import {AnyAction} from 'redux';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface Props extends RouteComponentProps
{
    setLoggedIn: () => AnyAction,
    isLoggedIn: RootState['isLoggedIn']
}

interface State
{
    username: string,
    password: string,
}

class Login extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount()
    {
        this.changeTitle();
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
    }

    changeTitle = () =>
    {
        document.title = '登录登录- Git Demo';
    };

    onUsernameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({username: e.target.value});
    };

    onPasswordInputChange: InputProps['onChange'] = e =>
    {
        this.setState({password: e.target.value});
    };

    onLoginFormSubmit: FormProps['onSubmit'] = async e =>
    {
        e.preventDefault();
        const {username, password} = this.state;
        if (this.loginFormParameterCheck(username, password))
        {
            const hash = AccountClass.calculateHash(username, password);
            const isSuccessful = await AccountApi.login(new AccountClass(username, hash));
            if (isSuccessful)
            {
                await this.onLoginSuccess();
            }
        }
    };

    loginFormParameterCheck = (username: string, password: string): boolean =>
    {
        if (username.length === 0)
        {
            notification.warn({message: '用户名不能为空'});
            return false;
        }
        if (password.length === 0)
        {
            notification.warn({message: '密码不能为空'});
            return false;
        }
        return true;
    };

    onLoginSuccess = async () =>
    {
        const {setLoggedIn} = this.props;
        setLoggedIn();
        notification.success({message: '登录成功'});
        this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
    };

    render()
    {
        const {username, password} = this.state;
        return (
            <LoginView username={username} password={password}
                       onLoginFormSubmit={this.onLoginFormSubmit}
                       onPasswordInputChange={this.onPasswordInputChange}
                       onUsernameInputChange={this.onUsernameInputChange} />
        );
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

const mapDispatchToProps = {
    setLoggedIn: setLoggedInAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));