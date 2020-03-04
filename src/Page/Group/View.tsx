import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Tabs} from 'antd';
import {TabsProps} from 'antd/lib/tabs';
import {PAGE_ID} from '../../Router/CONFIG';
import {Group} from '../../Class';
import {HomeOutlined, SettingOutlined, SmileOutlined, TeamOutlined} from '@ant-design/icons';

interface IProps
{
    group: Readonly<Group>,
    children: ReactNode,
    onTabChange: TabsProps['onChange'],
    tabActiveKey: string,
    loading: boolean,
    isAdmin: boolean,
}

function GroupView(props: Readonly<IProps>)
{
    const {children, onTabChange, tabActiveKey, group: {id, name}, loading, isAdmin} = props;
    return (
        loading ? null : (
            <div className={Style.Group}>
                <div className={Style.header}>
                    <div className={Style.basicInfo}>
                        <div className={Style.groupId}>
                            <TeamOutlined />
                            {id}
                        </div>
                        <div className={Style.groupName}>{name}</div>
                    </div>
                </div>
                <Tabs type={'card'} className={Style.tab} tabBarStyle={{
                    padding: '0 calc(50% - 500px)',
                    margin: '0',
                }} onChange={onTabChange} activeKey={tabActiveKey}>
                    <Tabs.TabPane tab={<><HomeOutlined />仓库</>}
                                  key={PAGE_ID.GROUP.REPOSITORIES}>
                        <div className={Style.tabContent}>{children}</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<><SmileOutlined />成员</>} key={PAGE_ID.GROUP.MEMBERS}>
                        <div className={Style.tabContent}>{children}</div>
                    </Tabs.TabPane>
                    {
                        isAdmin ? (
                            <Tabs.TabPane tab={<><SettingOutlined />设置</>}
                                          key={PAGE_ID.GROUP.SETTINGS.SETTINGS}>
                                <div className={Style.tabContent}>{children}</div>
                            </Tabs.TabPane>
                        ) : null
                    }
                </Tabs>
            </div>
        )
    );
}

export default React.memo(GroupView);
