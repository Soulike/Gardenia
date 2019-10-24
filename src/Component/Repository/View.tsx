import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Repository as RepositoryClass} from '../../Class';
import {Icon, Tabs} from 'antd';
import AccessibilityTag from '../AccessibilityTag';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import TAB_KEY from './TAB_KEY';
import {TabsProps} from 'antd/lib/tabs';

interface IProps
{
    repository: RepositoryClass,
    loading: boolean,
    tabActiveKey: TAB_KEY,
    onTabChange: TabsProps['onChange'],
    showSettings: boolean,
    children: ReactNode
}

function RepositoryView(props: IProps)
{
    const {
        repository: {username, name, isPublic},
        loading,
        onTabChange,
        tabActiveKey,
        showSettings,
        children,
    } = props;
    return (
        loading ? null :
            <div className={Style.Repository}>
                <div className={Style.header}>
                    <div className={Style.basicInfo}>
                        <AccessibilityTag isPublic={isPublic} />
                        <div className={Style.usernameAndName}>
                            <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                                {username}
                            </Link> / <Link to={RouterFunction.generateRepositoryRoute({username, repository: name})}>
                            <b>{name}</b>
                        </Link>
                        </div>
                    </div>
                </div>
                <Tabs defaultActiveKey={TAB_KEY.CODE} type={'card'} className={Style.tab} tabBarStyle={{
                    padding: '0 calc(50% - 500px)',
                    margin: '0',
                }} onChange={onTabChange} activeKey={tabActiveKey}>
                    <Tabs.TabPane tab={
                        <><Icon type="code" />代码</>
                    } key={TAB_KEY.CODE}>
                        <div className={Style.tabContent}>
                            {children}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <><Icon type="exclamation-circle" />Issues</>
                    } key={TAB_KEY.ISSUES}>
                        <div className={Style.tabContent}>
                            {children}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <><Icon type="pull-request" />Pull Requests</>
                    } key={TAB_KEY.PULL_REQUESTS}>
                        <div className={Style.tabContent}>
                            {children}
                        </div>
                    </Tabs.TabPane>
                    {
                        showSettings ? (
                            <Tabs.TabPane tab={
                                <><Icon type="setting" />设置</>
                            } key={TAB_KEY.SETTINGS}>
                                <div className={Style.tabContent}>
                                    {children}
                                </div>
                            </Tabs.TabPane>
                        ) : null
                    }
                </Tabs>
            </div>
    );
}

export default React.memo(RepositoryView);