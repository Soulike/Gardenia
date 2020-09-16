import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import qs from 'querystring';
import {LoginOutlined, UserAddOutlined} from '@ant-design/icons';
import Style from './Style.module.scss';

interface IProps
{
    currentURL?: string;   // 点击登录按钮时的页面地址
}

function UnLoggedInMenu(props: IProps)
{
    const {currentURL} = props;
    // 将点击时页面地址变为查询字符串放置在登录网址之后，以便登录成功后跳转
    // 格式：prev=xxxx
    const currentURLQueryString = qs.encode({prev: currentURL});
    return (
        <div className={Style.UnloggedInMenu}>
            <div className={Style.loginWrapper}>
                <Link className={Style.login} to={currentURLQueryString ?
                    `${PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}?${currentURLQueryString}` :
                    PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}>
                    <span className={Style.icon}><LoginOutlined /></span>登录
                </Link>
            </div>
            <div className={Style.signUpWrapper}>
                <Link className={Style.signUp} to={PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]}>
                    <span className={Style.icon}><UserAddOutlined /></span>注册
                </Link>
            </div>
        </div>
    );
}

export default React.memo(UnLoggedInMenu);