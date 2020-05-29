import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input} from 'antd';
import svg from '../../Static/Login/developing_code.svg';
import {InputProps} from 'antd/lib/input';
import {HINT} from '../../Validator';
import InputTip from '../../Component/InputTip';
import InputLabel from '../../Component/InputLabel';
import {BarcodeOutlined, LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
    verificationCode: string,
    onUsernameInputChange: InputProps['onChange'],
    onUsernameInputBlur: InputProps['onBlur'],
    onPasswordInputChange: InputProps['onChange'],
    onRepeatPasswordInputChange: InputProps['onChange'],
    onEmailInputChange: InputProps['onChange'],
    onVerificationCodeInputChange: InputProps['onChange'],
    onFormSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'],
    onGetVerificationCodeButtonClick: ButtonProps['onClick'],
    getVerificationCodeButtonText: string,
    disableGetVerificationCodeButton: boolean,
    loading: boolean,
}

function RegisterView(props: Readonly<IProps>)
{
    const {
        username,
        password,
        repeatPassword,
        email,
        onUsernameInputChange,
        onUsernameInputBlur,
        onPasswordInputChange,
        onRepeatPasswordInputChange,
        onEmailInputChange,
        onFormSubmit,
        onVerificationCodeInputChange,
        verificationCode,
        onGetVerificationCodeButtonClick,
        getVerificationCodeButtonText,
        disableGetVerificationCodeButton,
        loading,
    } = props;
    return (
        <main className={Style.Register}>
            <form action={'#'} className={Style.form} onSubmit={onFormSubmit}>
                <img className={Style.logo} src={svg} alt="web_developer_logo" />
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>用户名</InputLabel>
                    <Input type={'text'}
                           size={'large'}
                           onChange={onUsernameInputChange}
                           onBlur={onUsernameInputBlur}
                           autoFocus={true}
                           value={username}
                           prefix={<UserOutlined />} disabled={loading} />
                    <InputTip>
                        用户名要求 {HINT.Account.USERNAME}。
                    </InputTip>
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>密码</InputLabel>
                    <Input type={'password'}
                           size={'large'}
                           onChange={onPasswordInputChange}
                           value={password}
                           prefix={<LockOutlined />} disabled={loading} />
                    <InputTip>
                        为了您的账户安全，密码要求 {HINT.Account.PASSWORD}。
                    </InputTip>
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>重复密码</InputLabel>
                    <Input type={'password'}
                           size={'large'}
                           onChange={onRepeatPasswordInputChange}
                           value={repeatPassword}
                           prefix={<LockOutlined />} disabled={loading} />
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>E-Mail</InputLabel>
                    <Input type={'email'}
                           size={'large'}
                           onChange={onEmailInputChange}
                           value={email}
                           prefix={<MailOutlined />} disabled={loading} />
                    <InputTip>
                        该邮箱将用于统计您的提交次数、接收通知及修改密码，请确保该邮箱可用。
                    </InputTip>
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>邮箱验证码</InputLabel>
                    <Input type={'text'}
                           size={'large'}
                           onChange={onVerificationCodeInputChange}
                           value={verificationCode}
                           prefix={<BarcodeOutlined />} disabled={loading} maxLength={6}
                           addonAfter={
                               <Button disabled={disableGetVerificationCodeButton || loading}
                                       type={'link'}
                                       onClick={onGetVerificationCodeButtonClick}>
                                   {getVerificationCodeButtonText}
                               </Button>
                           } />
                    <InputTip>
                        如未收到验证码邮件，请查看其是否被误分类为垃圾邮件。
                    </InputTip>
                </div>
                <Button htmlType={'submit'}
                        className={Style.button}
                        size={'large'}
                        type={'primary'} disabled={loading} loading={loading}
                        block={true}>注册</Button>
            </form>
        </main>
    );
}

export default React.memo(RegisterView);