import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input} from 'antd';
import svg from '../../Static/Login/developing_code.svg';
import {InputProps} from 'antd/lib/input';
import {HINT} from '../../Validator';
import InputTip from '../../Component/InputTip';
import InputLabel from '../../Component/InputLabel';
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';

interface IProps
{
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
    onUsernameInputChange: InputProps['onChange'],
    onPasswordInputChange: InputProps['onChange'],
    onRepeatPasswordInputChange: InputProps['onChange'],
    onEmailInputChange: InputProps['onChange'],
    onFormSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'],
}

function RegisterView(props: Readonly<IProps>)
{
    const {
        username,
        password,
        repeatPassword,
        email,
        onUsernameInputChange,
        onPasswordInputChange,
        onRepeatPasswordInputChange,
        onEmailInputChange,
        onFormSubmit,
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
                           autoFocus={true}
                           value={username}
                           prefix={<UserOutlined />} />
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
                           prefix={<LockOutlined />} />
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
                           prefix={<LockOutlined />} />
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel required={true}>E-Mail</InputLabel>
                    <Input type={'email'}
                           size={'large'}
                           onChange={onEmailInputChange}
                           value={email}
                           prefix={<MailOutlined />} />
                    <InputTip>
                        该邮箱将用于统计您的提交次数及接收通知，请确保该邮箱可用。
                    </InputTip>
                </div>
                <Button htmlType={'submit'}
                        className={Style.button}
                        size={'large'}
                        type={'primary'}
                        block={true}>注册</Button>
            </form>
        </main>
    );
}

export default React.memo(RegisterView);