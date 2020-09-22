import React, {ReactNode} from 'react';
import {BackTop} from 'antd';
import Style from './Style.module.scss';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {Profile} from '../../Class';
import Logo from './Component/Logo';
import UnLoggedInMenu from './Component/UnloggedInMenu';
import LoggedInMenu from './Component/LoggedInMenu';
import NewTabAnchor from '../NewTabAnchor';
import {SmileTwoTone} from '@ant-design/icons';
import SearchInput from './Component/SearchInput';

interface IProps extends RouteComponentProps<{}>
{
    children?: ReactNode,
    isLoggedIn: boolean,
    profile: Profile | null,
}

function RootView(props: Readonly<IProps>)
{
    const {children, isLoggedIn, profile, location} = props;
    const date = new Date();
    return (
        <div className={Style.Root}>
            <BackTop />
            <div className={Style.topFiller} />
            <nav className={Style.top}>
                <div className={Style.left}>
                    <div className={Style.logoWrapper}>
                        <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}>
                            <Logo />
                        </Link>
                    </div>
                    <div className={Style.searchInputWrapper}>
                        <SearchInput />
                    </div>
                </div>
                <div className={Style.accountMenuWrapper}>
                    {
                        isLoggedIn && profile !== null ?
                            <LoggedInMenu username={profile.username} avatar={profile.avatar} /> :
                            <UnLoggedInMenu currentURL={location.pathname} />
                    }
                </div>
            </nav>
            <main className={Style.childrenWrapper}>
                {children}
            </main>
            <div className={Style.footerFiller} />
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