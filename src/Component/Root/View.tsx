import React, {ReactNode} from 'react';
import {Menu} from 'antd';
import Style from './Style.module.scss';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {Profile} from '../../Class';
import Logo from './Component/Logo';
import UnLoggedInMenu from './Component/UnloggedInMenu';
import LoggedInMenu from './Component/LoggedInMenu';
import NewTabAnchor from '../NewTabAnchor';
import {SmileTwoTone} from '@ant-design/icons';

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
    const date = new Date();
    return (
        <div className={Style.Root}>
            <div>
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
                <div className={Style.childrenWrapper}>
                    {children}
                </div>
            </div>
            <footer className={Style.footer}>
                <div className={Style.announce}>{date.getFullYear()} - Designed & Created
                                                                     by <NewTabAnchor href={'https://soulike.tech/'}>Soulike</NewTabAnchor>
                </div>
                <div className={Style.bugReport}>
                    <SmileTwoTone /> 欢迎前往 <NewTabAnchor href={'https://github.com/Soulike/Gardenia/issues'}>GitHub</NewTabAnchor> 汇报您发现的
                                     BUG <SmileTwoTone />
                </div>
            </footer>
        </div>
    );
}

export default withRouter(React.memo(RootView));