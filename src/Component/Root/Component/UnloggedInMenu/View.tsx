import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import qs from 'querystring';
import {LoginOutlined, UserAddOutlined} from '@ant-design/icons';

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
        <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
            <Menu.Item>
                <Link to={currentURLQueryString ?
                    `${PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}?${currentURLQueryString}` :
                    PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}>
                    <LoginOutlined />登录
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]}>
                    <UserAddOutlined />注册
                </Link>
            </Menu.Item>
        </Menu>
    );
}

export default React.memo(UnLoggedInMenu);