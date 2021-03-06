import React from 'react';
import {Avatar, Badge, Menu, Modal, Popover, Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';
import {Function as RouterFunction} from '../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import svg from '../../../../Static/PersonalCenter/default.svg';
import Style from './Style.module.scss';
import {
    BellOutlined,
    CaretDownOutlined,
    LogoutOutlined,
    PlusOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';

interface IProps
{
    username: string,
    avatar: string,
    unconfirmedNotificationCount: number,
    onLogoutClick: PopconfirmProps['onConfirm'],
}

function LoggedInMenu(props: IProps)
{
    const {username, avatar, onLogoutClick, unconfirmedNotificationCount} = props;
    return (
        <div className={Style.LoggedInMenu}>
            <div className={`${Style.notificationCenterWrapper} ${Style.itemWrapper}`}>
                <Tooltip title={'消息中心'}>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.NOTIFICATIONS]}>
                        <div className={Style.notificationWrapper}>
                            <Badge count={unconfirmedNotificationCount}>
                                <div className={Style.notificationIconWrapper}>
                                    <BellOutlined />
                                </div>
                            </Badge>
                        </div>
                    </Link>
                </Tooltip>
            </div>
            <div className={Style.itemWrapper}>
                <Popover placement={'bottom'} content={
                    <Menu selectable={false} style={{background: 'transparent', border: 'none'}} inlineIndent={0}>
                        <Menu.Item>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]}>
                                <PlusOutlined />创建仓库
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_GROUP]}>
                                <PlusOutlined />创建小组
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.ADD_COLLABORATION]}>
                                <PlusOutlined />成为仓库合作者
                            </Link>
                        </Menu.Item>
                    </Menu>}>
                    <div className={Style.popoverContent}>
                        <PlusOutlined />
                        <CaretDownOutlined />
                    </div>
                </Popover>
            </div>
            <div className={Style.itemWrapper}>
                <Popover placement={'bottomLeft'} content={
                    <Menu selectable={false} style={{background: 'transparent', border: 'none'}} inlineIndent={0}>
                        <Menu.Item>
                            <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                                以 <strong>{username}</strong> 身份登录
                            </Link>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item>
                            <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                                <UserOutlined />个人中心
                            </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING]}>
                            <SettingOutlined />设置
                        </Link>
                    </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item onClick={() =>
                        {
                            Modal.confirm({
                                title: '确定退出登录？',
                                onOk: onLogoutClick,
                            });
                        }}>
                            <LogoutOutlined />退出登录
                        </Menu.Item>
                    </Menu>
                }>
                    <div className={Style.popoverContent}>
                        {avatar ?
                            <Avatar shape={'square'} src={avatar} size={'small'} /> :
                            <Avatar shape={'square'} size={'small'} src={svg} />}
                        <CaretDownOutlined />
                    </div>
                </Popover>
            </div>
        </div>);
}

export default React.memo(LoggedInMenu);