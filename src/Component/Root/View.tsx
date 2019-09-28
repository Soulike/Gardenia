import React, {ReactNode} from 'react';
import {Icon, Menu} from 'antd';
import Style from './Style.module.scss';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';

interface Props
{
    children?: ReactNode,
    isLoggedIn: boolean,
}

function RootView(props: Props)
{
    const {children, isLoggedIn} = props;
    return (
        <div className={Style.Root}>
            <Menu mode={'horizontal'} theme={'dark'} className={Style.menu} selectable={false}>
                <Menu.Item className={Style.title}>Git Demo</Menu.Item>
                <Menu.Item className={Style.accountMenu}>
                    {
                        isLoggedIn ?
                            <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
                                <Menu.Item>
                                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]}>
                                        <Icon type="plus" />创建仓库
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER]}>
                                        <Icon type="user" />个人中心
                                    </Link>
                                </Menu.Item>
                            </Menu> :
                            <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
                                <Menu.Item>
                                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}>
                                        <Icon type="login" />登录
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]}>
                                        <Icon type="user-add" />注册
                                    </Link>
                                </Menu.Item>
                            </Menu>
                    }
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
}

export default React.memo(RootView);