import React from 'react';
import {Avatar, Icon, Menu, Modal} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import {Function as RouterFunction} from '../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import MenuDivider from './Component/MenuDivider';
import svg from '../../../../Static/PersonalCenter/default.svg';

interface IProps
{
    username: string,
    avatar: string,
    onLogoutClick: PopconfirmProps['onConfirm'],
}

function LoggedInMenu(props: IProps)
{
    const {username, avatar, onLogoutClick} = props;
    return (
        <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
            <Menu.SubMenu title={
                <>
                    <Icon type="plus" />
                    <Icon type="caret-down" />
                </>
            }>
                <Menu.Item>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]}>
                        <Icon type="plus" />创建仓库
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_GROUP]}>
                        <Icon type="plus" />创建小组
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.ADD_COLLABORATION]}>
                        <Icon type="plus" />成为仓库合作者
                    </Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={
                <>
                    {avatar ?
                        <Avatar shape={'square'} src={avatar} size={'small'} /> :
                        <Avatar shape={'square'} size={'small'} src={svg} />}
                    <Icon type="caret-down" />
                </>
            }>
                <Menu.Item>
                    <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                        以 <strong>{username}</strong> 身份登录
                    </Link>
                </Menu.Item>
                <MenuDivider />
                <Menu.Item>
                    <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                        <Icon type="user" />个人中心
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING]}>
                        <Icon type="setting" />设置
                    </Link>
                </Menu.Item>
                <MenuDivider />
                <Menu.Item onClick={() =>
                {
                    Modal.confirm({
                        title: '确定退出登录？',
                        onOk: onLogoutClick,
                    });
                }}>
                    <Icon type="logout" />退出登录
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
}

export default React.memo(LoggedInMenu);