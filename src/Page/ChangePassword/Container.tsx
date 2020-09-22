import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import * as CONFIG from '../../CONFIG';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {Account as AccountApi} from '../../Api';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../Validator';
import {notification} from 'antd';
import {Account} from '../../Class';
import {Action as RootAction} from '../../Component/Root';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as RouterConfig} from '../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = RouterConfig;

interface IProps extends RouteComponentProps
{
    setLoggedOut: typeof RootAction.setLoggedOutAction
}

interface IState
{
    username: string,
    password: string,
    repeatPassword: string,
    verificationCode: string,
    getVerificationCodeButtonText: string,
    getVerificationCodeButtonDisabled: boolean,
    loading: boolean,
}

class ChangePassword extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            verificationCode: '',
            getVerificationCodeButtonText: '获取验证码',
            getVerificationCodeButtonDisabled: false,
            loading: false,
        };
    }

    componentDidMount()
    {
        this.setTitle();
    }

    setTitle = () =>
    {
        document.title = `修改密码 - ${CONFIG.NAME}`;
    };

    onUsernameChange: InputProps['onChange'] = e =>
    {
        this.setState({username: e.target.value});
    };

    onPasswordChange: InputProps['onChange'] = e =>
    {
        this.setState({password: e.target.value});
    };

    onRepeatPasswordChange: InputProps['onChange'] = e =>
    {
        this.setState({repeatPassword: e.target.value});
    };

    onVerificationCodeChange: InputProps['onChange'] = e =>
    {
        this.setState({verificationCode: e.target.value});
    };

    onGetVerificationCodeButtonClick: ButtonProps['onClick'] = async () =>
    {
        const DISABLE_SECONDS = 30;
        let passedSeconds = 0;
        const {getVerificationCodeButtonText: originalGetVerificationCodeButtonText} = this.state;
        const {username} = this.state;
        if (!ValidatorFunction.Account.username(username))
        {
            notification.warn({message: ERROR_MESSAGE.Account.USERNAME});
        }
        else
        {
            this.setState({getVerificationCodeButtonDisabled: true});
            const timer = setInterval(() =>
            {
                passedSeconds++;
                this.setState({getVerificationCodeButtonText: `${DISABLE_SECONDS - passedSeconds} 秒后再次获取`});
            }, 1000);
            const timeout = setTimeout(() =>
            {
                clearInterval(timer);
                this.setState({
                    getVerificationCodeButtonDisabled: false,
                    getVerificationCodeButtonText: originalGetVerificationCodeButtonText,
                });
            }, DISABLE_SECONDS * 1000);
            const result = await AccountApi.sendVerificationCodeByUsername({username});
            if (result !== null)
            {
                notification.success({
                    message: '获取验证码成功',
                    description: `请到用户名 ${username} 使用的邮箱中查看`,
                });
            }
            else
            {
                clearInterval(timer);
                clearTimeout(timeout);
                this.setState({
                    getVerificationCodeButtonDisabled: false,
                    getVerificationCodeButtonText: originalGetVerificationCodeButtonText,
                });
            }
        }
    };

    onSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'] = async e =>
    {
        e.preventDefault();
        const {username, password, repeatPassword, verificationCode} = this.state;
        if (!ValidatorFunction.Account.username(username))
        {
            notification.warn({message: ERROR_MESSAGE.Account.USERNAME});
        }
        else if (!ValidatorFunction.Account.password(password))
        {
            notification.warn({message: ERROR_MESSAGE.Account.PASSWORD});
        }
        else if (password !== repeatPassword)
        {
            notification.warn({message: '两次输入密码不一致'});
        }
        else if (!ValidatorFunction.Account.verificationCode(verificationCode))
        {
            notification.warn({message: ERROR_MESSAGE.Account.VERIFICATION_CODE});
        }
        else
        {
            this.setState({loading: true});
            const hash = Account.calculateHash(username, password);
            const result = await AccountApi.changePassword({username, hash}, verificationCode);
            if (result !== null)
            {
                notification.success({message: '修改密码成功', description: '请使用新密码登录'});
                const {setLoggedOut, history} = this.props;
                await setLoggedOut();
                return history.push(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
            }
            this.setState({loading: false});
        }
    };

    render()
    {
        const {username, password, repeatPassword, verificationCode, getVerificationCodeButtonText, loading, getVerificationCodeButtonDisabled} = this.state;
        return (<View username={username}
                      password={password}
                      repeatPassword={repeatPassword}
                      verificationCode={verificationCode}
                      onUsernameChange={this.onUsernameChange}
                      onPasswordChange={this.onPasswordChange}
                      onRepeatPasswordChange={this.onRepeatPasswordChange}
                      onVerificationCodeChange={this.onVerificationCodeChange}
                      onSubmit={this.onSubmit}
                      getVerificationCodeButtonText={getVerificationCodeButtonText}
                      onGetVerificationCodeButtonClick={this.onGetVerificationCodeButtonClick}
                      loading={loading}
                      getVerificationCodeButtonDisabled={getVerificationCodeButtonDisabled} />);
    }
}

const mapDispatchToProps = {
    setLoggedOut: RootAction.setLoggedOutAction,
};

export default connect(null, mapDispatchToProps)(withRouter(ChangePassword));