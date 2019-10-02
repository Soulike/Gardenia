import React, {PureComponent} from 'react';
import LoginView from './View';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';
import {Crypto} from '../../Function';
import {setLoggedInAction} from '../../Component/Root/Action/Action';
import {connect} from 'react-redux';

interface Props extends RouteComponentProps
{
    setLoggedIn: () => any,
    isLoggedIn: boolean
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
        document.title = '登录';
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
    }

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
        if (username.length === 0)
        {
            notification.warn({message: '用户名不能为空'});
            return;
        }
        if (password.length === 0)
        {
            notification.warn({message: '密码不能为空'});
            return;
        }
        const hash = Crypto.sha256(Crypto.sha256(username) + Crypto.sha256(password));
        const isSuccessful = await Account.login(username, hash);
        if (isSuccessful)
        {
            const {setLoggedIn} = this.props;
            setLoggedIn();
            notification.success({message: '登录成功'});
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));