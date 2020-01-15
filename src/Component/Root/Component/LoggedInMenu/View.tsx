import React from 'react';
import {Avatar, Icon, Menu, Modal} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import {Function as RouterFunction} from '../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';

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
            </Menu.SubMenu>
            <Menu.SubMenu title={
                <>
                    {avatar ?
                        <Avatar shape={'square'} src={avatar} size={'small'} /> :
                        <Avatar shape={'square'} size={'small'}
                                style={{backgroundColor: '#1890FF'}}>
                            {username.slice(0, 1)}
                        </Avatar>}
                    <Icon type="caret-down" />
                </>
            }>
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