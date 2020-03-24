import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Menu, Spin} from 'antd';
import {IMenuItem} from './Interface';
import {Link} from 'react-router-dom';

interface IProps
{
    children: ReactNode,
    menuItems: Readonly<Readonly<IMenuItem>[]>,
    activeItemKey: string,
    loading: boolean,
}

function SettingsView(props: Readonly<IProps>)
{
    const {children, menuItems, activeItemKey, loading} = props;
    return (
        <Spin spinning={loading}>
            <div className={Style.Settings}>
                <div className={Style.menuWrapper}>
                    <Menu className={Style.menu} selectedKeys={[activeItemKey]} mode={'inline'}>
                        {
                            menuItems.map(menuItem =>
                            {
                                const {key, to, title, icon} = menuItem;
                                return (
                                    <Menu.Item key={key} className={Style.item}>
                                        <Link to={to}>{icon}{title}</Link>
                                    </Menu.Item>);
                            })
                        }
                    </Menu>
                </div>
                <div className={Style.contentWrapper}>
                    {children}
                </div>
            </div>
        </Spin>
    );
}

export default React.memo(SettingsView);