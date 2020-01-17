import React from 'react';
import Style from './Style.module.scss';
import {Icon, Menu} from 'antd';
import {CONFIG as ROUTER_CONFIG} from '../../../../Router';
import {Link} from 'react-router-dom';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface IProps
{
    currentPageRoute: string,
}

function ItemMenu(props: IProps)
{
    const {currentPageRoute} = props;
    // 进入 /setting 页面默认组件路由
    const DEFAULT_TAB_ROUTE = PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.PROFILE];
    const selectKey = currentPageRoute === PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING] ?
        DEFAULT_TAB_ROUTE : currentPageRoute;
    return (
        <div className={Style.ItemMenu}>
            <Menu mode={'inline'} selectedKeys={[selectKey]}>
                <Menu.Item key={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.PROFILE]}>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.PROFILE]}>
                        <Icon type="profile" />
                        个人资料
                    </Link>
                </Menu.Item>
                <Menu.Item key={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.AVATAR]}>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.AVATAR]}>
                        <Icon type="smile" />
                        头像
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default React.memo(ItemMenu);