import React from 'react';
import Style from './Style.module.scss';
import {Button, Icon, Input} from 'antd';
import svg from '../../Static/Login/developing_code.svg';
import {InputProps} from 'antd/lib/input';
import {FormProps} from 'antd/lib/form';
import InputLabel from '../../Component/InputLabel/View';
import {Link} from 'react-router-dom';
import {CONFIG} from '../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps
{
    username: string,
    password: string,
    onUsernameInputChange: InputProps['onChange'],
    onPasswordInputChange: InputProps['onChange'],
    onLoginFormSubmit: FormProps['onSubmit'],
}

function LoginView(props: Readonly<IProps>)
{
    const {username, password, onUsernameInputChange, onPasswordInputChange, onLoginFormSubmit} = props;
    return (
        <main className={Style.Login}>
            <form action={'#'} className={Style.form} onSubmit={onLoginFormSubmit}>
                <img className={Style.logo} src={svg} alt="web_developer_logo" />
                <div className={Style.registerTip}>
                    没有账号？
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]}>点此注册</Link>
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel>用户名</InputLabel>
                    <Input type={'text'}
                           size={'large'}
                           onChange={onUsernameInputChange}
                           autoFocus={true}
                           value={username}
                           prefix={<Icon type="user" />} />
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel>密码</InputLabel>
                    <Input type={'password'}
                           size={'large'}
                           onChange={onPasswordInputChange}
                           value={password}
                           prefix={<Icon type="lock" />} />
                </div>
                <Button htmlType={'submit'}
                        className={Style.button}
                        size={'large'}
                        type={'primary'}
                        block={true}>登录</Button>
            </form>
        </main>
    );
}

export default React.memo(LoginView);