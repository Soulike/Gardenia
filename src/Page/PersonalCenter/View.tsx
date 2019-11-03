import React from 'react';
import Style from './Style.module.scss';
import Profile from './Component/Profile';
import {Tabs} from 'antd';
import {Tab} from './Interface';
import {TabsProps} from 'antd/lib/tabs';

interface IProps
{
    tabs: Readonly<Readonly<Tab>[]>,
    activeTabKey: string,
    onTabChange: TabsProps['onChange']
}

function PersonalCenterView(props: Readonly<IProps>)
{
    const {tabs, activeTabKey, onTabChange} = props;
    return (
        <div className={Style.PersonalCenter}>
            <div className={Style.profileWrapper}>
                <Profile />
            </div>
            <div className={Style.tabWrapper}>
                <Tabs animated={false} activeKey={activeTabKey} onChange={onTabChange}>
                    {
                        tabs.map(({key, title, component}) =>
                            <Tabs.TabPane key={key}
                                          tab={title}>{component}</Tabs.TabPane>)
                    }
                </Tabs>
            </div>
        </div>
    );
}

export default React.memo(PersonalCenterView);