import React from 'react';
import Style from './Style.module.scss';
import {Button, Icon, Input} from 'antd';
import svg from '../../Static/Login/developing_code.svg';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';

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
    onFormSubmit: FormProps['onSubmit'],
}

function RegisterView(props: IProps)
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
                <Input type={'text'}
                       size={'large'}
                       onChange={onUsernameInputChange}
                       autoFocus={true}
                       value={username}
                       placeholder={'用户名'}
                       prefix={<Icon type="user" />} />
                <Input type={'password'}
                       size={'large'}
                       onChange={onPasswordInputChange}
                       value={password}
                       placeholder={'密码'}
                       prefix={<Icon type="lock" />} />
                <Input type={'password'}
                       size={'large'}
                       onChange={onRepeatPasswordInputChange}
                       value={repeatPassword}
                       placeholder={'重复密码'}
                       prefix={<Icon type="lock" />} />
                <Input type={'email'}
                       size={'large'}
                       onChange={onEmailInputChange}
                       value={email}
                       placeholder={'邮箱'}
                       prefix={<Icon type="mail" />} />
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