import React, {PureComponent} from 'react';
import LoginView from './View';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';
import {Crypto} from '../../Function';
import validator from 'validator';

interface Props extends RouteComponentProps {}

interface State
{
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
}

class Register extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            email: '',
        };
    }

    componentDidMount()
    {
        document.title = '注册';
    }

    onUsernameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({username: e.target.value});
    };

    onPasswordInputChange: InputProps['onChange'] = e =>
    {
        this.setState({password: e.target.value});
    };

    onRepeatPasswordInputChange: InputProps['onChange'] = e =>
    {
        this.setState({repeatPassword: e.target.value});
    };

    onEmailInputChange: InputProps['onChange'] = e =>
    {
        this.setState({email: e.target.value});
    };

    onLoginFormSubmit: FormProps['onSubmit'] = async e =>
    {
        // 讲道理这里应该有邮箱验证码的
        e.preventDefault();
        const {username, password, repeatPassword, email} = this.state;
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
        if (password !== repeatPassword)
        {
            notification.warn({message: '两次输入密码不相同'});
            return;
        }
        if (!validator.isEmail(email))
        {
            notification.warn({message: '请输入正确的邮箱'});
            return;
        }
        const hash = Crypto.sha256(Crypto.sha256(username) + Crypto.sha256(password));
        const isSuccessful = await Account.register(username, hash, email);
        if (isSuccessful)
        {
            notification.success({message: '注册成功'});
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
        }
    };

    render()
    {
        const {username, password, repeatPassword, email} = this.state;
        return (
            <LoginView username={username}
                       password={password}
                       email={email}
                       onLoginFormSubmit={this.onLoginFormSubmit}
                       onPasswordInputChange={this.onPasswordInputChange}
                       onUsernameInputChange={this.onUsernameInputChange}
                       onEmailInputChange={this.onEmailInputChange}
                       onRepeatPasswordInputChange={this.onRepeatPasswordInputChange}
                       repeatPassword={repeatPassword} />
        );
    }
}

export default withRouter(Register);