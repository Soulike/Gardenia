import React, {ReactNode} from 'react';
import {Menu} from 'antd';
import Style from './Style.module.scss';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {Profile} from '../../Class';
import Logo from './Component/Logo';
import UnLoggedInMenu from './Component/UnloggedInMenu';
import LoggedInMenu from './Component/LoggedInMenu';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface IProps extends RouteComponentProps<{}>
{
    children?: ReactNode,
    isLoggedIn: boolean,
    username: Profile['username'],
    avatar: Profile['avatar'],
}

function RootView(props: Readonly<IProps>)
{
    const {children, isLoggedIn, username, avatar, location} = props;
    return (
        <div className={Style.Root}>
            <Menu mode={'horizontal'} theme={'dark'} className={Style.menu} selectable={false}>
                <Menu.Item>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}>
                        <Logo />
                    </Link>
                </Menu.Item>
                <Menu.Item className={Style.accountMenu}>
                    {
                        isLoggedIn ?
                            <LoggedInMenu username={username} avatar={avatar} /> :
                            <UnLoggedInMenu currentURL={location.pathname} />
                    }
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
}

export default withRouter(React.memo(RootView));