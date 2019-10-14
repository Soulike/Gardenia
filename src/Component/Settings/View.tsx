import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Menu} from 'antd';
import {MenuItem} from './Interface';
import {Link} from 'react-router-dom';

interface Props
{
    children: ReactNode,
    menuItems: MenuItem[],
    activeItemKey: string,
}

function SettingsView(props: Props)
{
    const {children, menuItems, activeItemKey} = props;
    return (
        <div className={Style.Settings}>
            <div className={Style.menuWrapper}>
                <Menu className={Style.menu} selectedKeys={[activeItemKey]} mode={'inline'}>
                    {
                        menuItems.map(menuItem =>
                        {
                            const {key, to, title} = menuItem;
                            return (
                                <Menu.Item key={key} className={Style.item}>
                                    <Link to={to}>{title}</Link>
                                </Menu.Item>);
                        })
                    }
                </Menu>
            </div>
            <div className={Style.contentWrapper}>
                {children}
            </div>
        </div>
    );
}

export default React.memo(SettingsView);