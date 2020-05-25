import React, {PureComponent} from 'react';
import View from './View';
import {promisify} from 'util';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../../../Validator';
import {Profile as ProfileApi} from '../../../../../../Api/Profile';
import {notification} from 'antd';

const {Profile: ProfileValidator} = ValidatorFunction;

interface IProps
{
    defaultEmail?: string,   // 默认显示 email
    loadingDefaultEmail?: boolean,
}

interface IState
{
    email: string,
    verificationCode: string,
    getVerificationCodeButtonText: string,
    disableGetVerificationCodeButton: boolean,
    loading: boolean,
}

class Email extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            email: '',
            verificationCode: '',
            getVerificationCodeButtonText: '获取验证码',
            disableGetVerificationCodeButton: false,
            loading: false,
        };
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {defaultEmail} = this.props;
        const {defaultEmail: prevDefaultEmail} = prevProps;
        if (defaultEmail !== prevDefaultEmail && defaultEmail !== undefined)
        {
            await this.setStatePromise({email: defaultEmail});
        }
    }

    onEmailInputChange: InputProps['onChange'] = async e =>
    {
        await this.setStatePromise({email: e.target.value});
    };


    onVerificationCodeInputChange: InputProps['onChange'] = async e =>
    {
        await this.setStatePromise({verificationCode: e.target.value});
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
            await this.setStatePromise({disableGetVerificationCodeButton: true});
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
            const result = await ProfileApi.sendSetEmailVerificationCodeToEmail(email);
            if (result !== null)
            {
                notification.success({message: '获取验证码成功', description: `请到 ${email} 查看`});
            }
            else
            {
                clearInterval(timer);
                clearTimeout(timeout);
                await this.setStatePromise({
                    disableGetVerificationCodeButton: false,
                    getVerificationCodeButtonText: originalGetVerificationCodeButtonText,
                });
            }
        }
    };

    onEmailSubmit: ButtonProps['onClick'] = async () =>
    {
        const {email, verificationCode} = this.state;
        if (!ValidatorFunction.Account.verificationCode(verificationCode))
        {
            notification.warn({
                message: ERROR_MESSAGE.Account.VERIFICATION_CODE,
            });
        }
        else if (!ValidatorFunction.Profile.email(email))
        {
            notification.warn({
                message: ERROR_MESSAGE.Profile.EMAIL,
            });
        }
        else
        {
            await this.setStatePromise({loading: true});
            const result = await ProfileApi.setEmail(email, verificationCode);
            if (result !== null)
            {
                notification.success({message: '邮箱修改成功'});
                await this.setStatePromise({verificationCode: ''});
            }
            await this.setStatePromise({loading: false});
        }
    };

    render()
    {
        const {loadingDefaultEmail} = this.props;
        const {email, loading, verificationCode, disableGetVerificationCodeButton, getVerificationCodeButtonText} = this.state;
        return (<View email={email}
                      loading={loading || !!loadingDefaultEmail}
                      disableGetVerificationCodeButton={disableGetVerificationCodeButton}
                      getVerificationCodeButtonText={getVerificationCodeButtonText}
                      onGetVerificationCodeButtonClick={this.onGetVerificationCodeButtonClick}
                      onVerificationCodeInputChange={this.onVerificationCodeInputChange}
                      verificationCode={verificationCode}
                      onEmailInputChange={this.onEmailInputChange}
                      onEmailSubmit={this.onEmailSubmit} />);
    }
}

export default Email;