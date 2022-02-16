import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import * as CONFIG from '../../CONFIG';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account as AccountApi} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {Account} from '../../Class';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../Validator';
import {ButtonProps} from 'antd/lib/button';


const {Account: AccountValidator, Profile: ProfileValidator} = ValidatorFunction;

interface IProps extends RouteComponentProps {}

interface IState
{
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
    verificationCode: string,
    getVerificationCodeButtonText: string,
    disableGetVerificationCodeButton: boolean,
    loading: boolean,
}

class Register extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            email: '',
            verificationCode: '',
            getVerificationCodeButtonText: '获取验证码',
            disableGetVerificationCodeButton: false,
            loading: false,
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

    onUsernameInputBlur: InputProps['onBlur'] = async () =>
    {
        const {username} = this.state;
        if (username !== '')
        {
            if (!ValidatorFunction.Account.username(username))
            {
                notification.warn({
                    message: ERROR_MESSAGE.Account.USERNAME,
                    description: HINT.Account.USERNAME,
                });
            }
            else
            {
                await this.setStatePromise({loading: true});
                const result = await AccountApi.checkIfUsernameAvailable(username);
                if (result !== null)
                {
                    const {isAvailable} = result;
                    if (!isAvailable)
                    {
                        notification.warn({message: `用户名 ${username} 已存在`});
                    }
                }
                await this.setStatePromise({loading: false});
            }
        }

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

    onVerificationCodeInputChange: InputProps['onChange'] = e =>
    {
        this.setState({verificationCode: e.target.value});
    };

    onFormSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'] = async e =>
    {
        e.preventDefault();
        if (this.validateFormInput())
        {
            await this.submitForm();
        }
    };

    onGetVerificationCodeButtonClick: ButtonProps['onClick'] = async () =>
    {
        const DISABLE_SECONDS = 30;
        const {getVerificationCodeButtonText: originalGetVerificationCodeButtonText, email} = this.state;
        if (!ProfileValidator.email(email))
        {
            notification.warn({message: ERROR_MESSAGE.Profile.EMAIL});
        }
        else
        {
            this.setState({disableGetVerificationCodeButton: true});
            let passedSeconds = 0;
            const timer = setInterval(() =>
            {
                passedSeconds++;
                this.setState({
                    getVerificationCodeButtonText: `${DISABLE_SECONDS - passedSeconds} 秒后再获取`,
                });
            }, 1000);
            const timeout = setTimeout(() =>
            {
                clearInterval(timer);
                this.setState({
                    disableGetVerificationCodeButton: false,
                    getVerificationCodeButtonText: originalGetVerificationCodeButtonText,
                });
            }, DISABLE_SECONDS * 1000);
            const result = await AccountApi.sendVerificationCodeToEmail({email});
            if (result !== null)
            {
                notification.success({message: '获取验证码成功', description: `请到 ${email} 查看`});
            }
            else
            {
                clearInterval(timer);
                clearTimeout(timeout);
                this.setState({
                    disableGetVerificationCodeButton: false,
                    getVerificationCodeButtonText: originalGetVerificationCodeButtonText,
                });
            }
        }

    };

    validateFormInput = (): boolean =>
    {
        const {username, password, repeatPassword, email, verificationCode} = this.state;
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
        if (!AccountValidator.verificationCode(verificationCode))
        {
            notification.warn({message: ERROR_MESSAGE.Account.VERIFICATION_CODE});
            return false;
        }
        return true;
    };

    submitForm = async () =>
    {
        const {username, password, email, verificationCode} = this.state;
        const hash = Account.calculateHash(username, password);
        this.setState({loading: true});
        const isSuccessful = await AccountApi.register({username, hash}, {
            nickname: username,
            email,
            avatar: '',
        }, verificationCode);
        if (isSuccessful)
        {
            this.onRegisterSuccess();
        }
        this.setState({loading: false});
    };

    onRegisterSuccess = () =>
    {
        notification.success({message: '注册成功'});
        return this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
    };

    render()
    {
        const {loading, disableGetVerificationCodeButton, username, password, repeatPassword, email, verificationCode, getVerificationCodeButtonText} = this.state;
        return (
            <View loading={loading} username={username}
                  password={password}
                  email={email}
                  disableGetVerificationCodeButton={disableGetVerificationCodeButton}
                  verificationCode={verificationCode}
                  onVerificationCodeInputChange={this.onVerificationCodeInputChange}
                  onFormSubmit={this.onFormSubmit}
                  onPasswordInputChange={this.onPasswordInputChange}
                  onUsernameInputChange={this.onUsernameInputChange}
                  onUsernameInputBlur={this.onUsernameInputBlur}
                  onEmailInputChange={this.onEmailInputChange}
                  onRepeatPasswordInputChange={this.onRepeatPasswordInputChange}
                  repeatPassword={repeatPassword}
                  onGetVerificationCodeButtonClick={this.onGetVerificationCodeButtonClick}
                  getVerificationCodeButtonText={getVerificationCodeButtonText} />
        );
    }
}

export default withRouter(Register);