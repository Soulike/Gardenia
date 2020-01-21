import React, {PureComponent} from 'react';
import View from './View';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';
import {Account as AccountClass} from '../../Class';
import CONFIG from '../../CONFIG';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../Validator';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;
const {Account: AccountValidator, Profile: ProfileValidator} = ValidatorFunction;

interface IProps extends RouteComponentProps {}

interface IState
{
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
}

class Register extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
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
        document.title = `注册 - ${CONFIG.NAME}`;
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
        if (!AccountValidator.username(username))
        {
            notification.warn({
                message: ERROR_MESSAGE.Account.USERNAME,
                description: HINT.Account.USERNAME,
            });
            return false;
        }
        if (!AccountValidator.password(password))
        {
            notification.warn({
                message: ERROR_MESSAGE.Account.PASSWORD,
                description: HINT.Account.PASSWORD,
            });
            return false;
        }
        if (password !== repeatPassword)
        {
            notification.warn({message: '两次输入密码不相同'});
            return false;
        }
        if (!ProfileValidator.email(email))
        {
            notification.warn({message: ERROR_MESSAGE.Profile.EMAIL});
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