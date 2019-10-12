import React, {PureComponent} from 'react';
import View from './View';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';
import validator from 'validator';
import {Account as AccountClass} from '../../Class';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

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
        this.setTitle();
    }

    setTitle = () =>
    {
        document.title = '注册 - Git Demo';
    };

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

    onFormSubmit: FormProps['onSubmit'] = async e =>
    {
        e.preventDefault();
        if (this.validateFormInput())
        {
            await this.submitForm();
        }
    };

    validateFormInput = (): boolean =>
    {
        // 讲道理这里应该有邮箱验证码的
        const {username, password, repeatPassword, email} = this.state;
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
        if (password !== repeatPassword)
        {
            notification.warn({message: '两次输入密码不相同'});
            return false;
        }
        if (!validator.isEmail(email))
        {
            notification.warn({message: '请输入正确的邮箱'});
            return false;
        }
        return true;
    };

    submitForm = async () =>
    {
        const {username, password, email} = this.state;
        const hash = AccountClass.calculateHash(username, password);
        const isSuccessful = await Account.register({username, hash}, {nickname: username, email, avatar: ''});
        if (isSuccessful)
        {
            this.onRegisterSuccess();
        }
    };

    onRegisterSuccess = () =>
    {
        notification.success({message: '注册成功'});
        this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
    };

    render()
    {
        const {username, password, repeatPassword, email} = this.state;
        return (
            <View username={username}
                  password={password}
                  email={email}
                  onFormSubmit={this.onFormSubmit}
                  onPasswordInputChange={this.onPasswordInputChange}
                  onUsernameInputChange={this.onUsernameInputChange}
                  onEmailInputChange={this.onEmailInputChange}
                  onRepeatPasswordInputChange={this.onRepeatPasswordInputChange}
                  repeatPassword={repeatPassword} />
        );
    }
}

export default withRouter(Register);