import React, {ReactNode} from 'react';
import {Icon, Menu, Modal} from 'antd';
import Style from './Style.module.scss';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG, Function as RouterFunction} from '../../Router';
import {Profile} from '../../Class';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import qs from 'querystring';
import CONFIG from '../../CONFIG';
import logo from '../../Static/logo.svg';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface IProps extends RouteComponentProps<{}>
{
    children?: ReactNode,
    isLoggedIn: boolean,
    username: Profile['username'],
    onLogoutClick: PopconfirmProps['onConfirm'],
}

function RootView(props: Readonly<IProps>)
{
    const {children, isLoggedIn, username, onLogoutClick, location} = props;
    const prevQueryString = qs.encode({prev: location.pathname});
    return (
        <div className={Style.Root}>
            <Menu mode={'horizontal'} theme={'dark'} className={Style.menu} selectable={false}>
                <Menu.Item>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]} className={Style.titleWrapper}>
                        <div className={Style.logoWrapper}><img src={logo} alt={'icon'} className={Style.logo} /></div>
                        <span className={Style.title}>{CONFIG.NAME}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item className={Style.accountMenu}>
                    {
                        isLoggedIn ?
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
                                        <Icon type="user" />
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
                            </Menu> :
                            <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
                                <Menu.Item>
                                    <Link to={`${PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}?${prevQueryString}`}>
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

export default withRouter(React.memo(RootView));