import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import svg from '../../Static/Login/developing_code.svg';
import {Link} from 'react-router-dom';
import InputLabel from '../../Component/InputLabel';
import {Button, Input} from 'antd';
import {BarcodeOutlined, LockOutlined, UserOutlined} from '@ant-design/icons';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import InputTip from '../../Component/InputTip';
import {HINT} from '../../Validator';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';

interface IProps
{
    username: string,
    password: string,
    repeatPassword: string,
    verificationCode: string,
    loading: boolean,

    getVerificationCodeButtonText: string,
    getVerificationCodeButtonDisabled: boolean,

    onUsernameChange: InputProps['onChange'],
    onPasswordChange: InputProps['onChange'],
    onRepeatPasswordChange: InputProps['onChange'],
    onVerificationCodeChange: InputProps['onChange'],

    onGetVerificationCodeButtonClick: ButtonProps['onClick'],

    onSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'],
}

function ChangePassword(props: IProps)
{
    const {
        username, password, repeatPassword, verificationCode, getVerificationCodeButtonText,
        onPasswordChange, onUsernameChange, onRepeatPasswordChange, onVerificationCodeChange,
        onSubmit, onGetVerificationCodeButtonClick, getVerificationCodeButtonDisabled,
        loading,
    } = props;
    return (
        <main className={Style.ChangePassword}>
            <form action={'#'} className={Style.form} onSubmit={onSubmit}>
                <img className={Style.logo} src={svg} alt="web_developer_logo" />
                <div className={Style.loginTip}>
                    不需要修改密码？
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}>点此登录</Link>
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>用户名</InputLabel>
                    <Input type={'text'}
                           size={'large'}
                           autoFocus={true}
                           value={username}
                           onChange={onUsernameChange}
                           prefix={<UserOutlined />} disabled={loading} />
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>新密码</InputLabel>
                    <Input type={'password'}
                           size={'large'}
                           value={password}
                           onChange={onPasswordChange}
                           prefix={<LockOutlined />} disabled={loading} />
                    <InputTip>为了您的账户安全，密码要求 {HINT.Account.PASSWORD}</InputTip>
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>重复新密码</InputLabel>
                    <Input type={'password'}
                           size={'large'}
                           value={repeatPassword}
                           onChange={onRepeatPasswordChange}
                           prefix={<LockOutlined />} disabled={loading} />
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>邮箱验证码</InputLabel>
                    <Input type={'text'}
                           size={'large'}
                           value={verificationCode}
                           onChange={onVerificationCodeChange}
                           prefix={<BarcodeOutlined />} disabled={loading} addonAfter={
                        <Button type={'link'}
                                onClick={onGetVerificationCodeButtonClick}
                                disabled={getVerificationCodeButtonDisabled || loading}>
                            {getVerificationCodeButtonText}
                        </Button>
                    } />
                </div>
                <Button htmlType={'submit'}
                        className={Style.button}
                        size={'large'}
                        type={'primary'}
                        block={true} disabled={loading} loading={loading}>修改密码</Button>
            </form>
        </main>
    );
}

export default React.memo(ChangePassword);