import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input} from 'antd';
import svg from '../../Static/Login/developing_code.svg';
import {InputProps} from 'antd/lib/input';
import InputLabel from '../../Component/InputLabel/View';
import {Link} from 'react-router-dom';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import InputTip from '../../Component/InputTip';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';

interface IProps
{
    username: string,
    password: string,
    onUsernameInputChange: InputProps['onChange'],
    onPasswordInputChange: InputProps['onChange'],
    onLoginFormSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'],
    loading: boolean,
}

function LoginView(props: Readonly<IProps>)
{
    const {username, password, onUsernameInputChange, onPasswordInputChange, onLoginFormSubmit, loading} = props;
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
                           disabled={loading}
                           prefix={<UserOutlined />} />
                </div>
                <div className={Style.inputWrapper}>
                    <InputLabel>密码</InputLabel>
                    <Input type={'password'}
                           size={'large'}
                           onChange={onPasswordInputChange}
                           value={password}
                           disabled={loading}
                           prefix={<LockOutlined />} />
                    <InputTip>
                        忘记密码？
                        <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CHANGE_PASSWORD]}>点此修改密码</Link>
                    </InputTip>
                </div>
                <Button htmlType={'submit'}
                        className={Style.button}
                        size={'large'}
                        type={'primary'} disabled={loading} loading={loading}
                        block={true}>登录</Button>
            </form>
        </main>
    );
}

export default React.memo(LoginView);