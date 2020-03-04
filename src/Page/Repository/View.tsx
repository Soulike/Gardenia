import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Repository as RepositoryClass} from '../../Class';
import {Tabs, Tag} from 'antd';
import AccessibilityTag from '../../Component/AccessibilityTag';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import TAB_KEY from './TAB_KEY';
import {TabsProps} from 'antd/lib/tabs';
import ForkButton from './Component/ForkButton';
import {CodeOutlined, ExclamationCircleOutlined, PullRequestOutlined, SettingOutlined} from '@ant-design/icons';

interface IProps
{
    repository: Readonly<RepositoryClass>,
    loading: boolean,
    tabActiveKey: TAB_KEY,
    onTabChange: TabsProps['onChange'],
    showSettings: boolean,
    children: ReactNode,
    forkFrom: Readonly<Pick<RepositoryClass, 'username' | 'name'>> | null,
    openPullRequestAmount: number,
}

function RepositoryView(props: Readonly<IProps>)
{
    const {
        repository: {username, name, isPublic},
        forkFrom,
        loading,
        onTabChange,
        tabActiveKey,
        showSettings,
        children,
        openPullRequestAmount,
    } = props;
    return (
        loading ? null :
            <div className={Style.Repository}>
                <div className={Style.header}>
                    <div className={Style.basicInfo}>
                        <AccessibilityTag isPublic={isPublic} />
                        <div className={Style.usernameAndNameWrapper}>
                            <div className={Style.usernameAndName}>
                                <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                                    {username}
                                </Link> / <Link to={RouterFunction.generateRepositoryCodeRoute({
                                username,
                                repository: name,
                            })}>
                                <b>{name}</b>
                            </Link>
                            </div>
                            <div className={Style.forkFrom}>
                                {
                                    forkFrom === null ? null : (
                                        <div className={Style.forkFrom}>
                                            <div className={Style.text}>fork 自</div>
                                            <Link to={RouterFunction.generatePersonalCenterRoute({username: forkFrom.username})}>
                                                {forkFrom.username}
                                            </Link> / <Link to={RouterFunction.generateRepositoryCodeRoute({
                                            username: forkFrom.username,
                                            repository: forkFrom.name,
                                        })}>
                                            <b>{forkFrom.name}</b>
                                        </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={Style.buttonWrapper}>
                        <ForkButton />
                    </div>
                </div>
                <Tabs defaultActiveKey={TAB_KEY.CODE} type={'card'} className={Style.tab} tabBarStyle={{
                    padding: '0 calc(50% - 500px)',
                    margin: '0',
                }} onChange={onTabChange} activeKey={tabActiveKey}>
                    <Tabs.TabPane tab={
                        <><CodeOutlined />代码</>
                    } key={TAB_KEY.CODE}>
                        <div className={Style.tabContent}>
                            {children}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <><ExclamationCircleOutlined />Issues</>
                    } key={TAB_KEY.ISSUES}>
                        <div className={Style.tabContent}>
                            {children}
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <><PullRequestOutlined />Pull
                                                 Requests <Tag className={Style.tag}>{openPullRequestAmount}</Tag></>
                    } key={TAB_KEY.PULL_REQUESTS}>
                        <div className={Style.tabContent}>
                            {children}
                        </div>
                    </Tabs.TabPane>
                    {
                        showSettings ? (
                            <Tabs.TabPane tab={
                                <><SettingOutlined />设置</>
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