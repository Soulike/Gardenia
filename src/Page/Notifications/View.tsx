import React from 'react';
import Style from './Style.module.scss';
import {Notification as NotificationClass} from '../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Button, Card, Empty, List, Spin} from 'antd';
import Notification from './Component/Notification';

interface IProps
{
    notifications: NotificationClass[],
    unconfirmedNotificationCount: number,
    onConfirmButtonClickFactory: (id: NotificationClass['id']) => ButtonProps['onClick'],
    onUnconfirmButtonClickFactory: (id: NotificationClass['id']) => ButtonProps['onClick'],
    onLoadMoreButtonClick: ButtonProps['onClick'],
    loading: boolean,
}

function Notifications(props: IProps)
{
    const {
        notifications, unconfirmedNotificationCount,
        onConfirmButtonClickFactory, onUnconfirmButtonClickFactory,
        onLoadMoreButtonClick, loading,
    } = props;
    return (
        <div className={Style.Notifications}>
            <Card title={<div>消息 ({unconfirmedNotificationCount} 条未确认)</div>}>
                <Spin spinning={loading}>
                    {
                        notifications.length > 0 ? (<>
                            <List bordered={true} size={'small'}>
                                {
                                    notifications.map(notification =>
                                        <Notification notification={notification}
                                                      onConfirmButtonClickFactory={onConfirmButtonClickFactory}
                                                      onUnconfirmButtonClickFactory={onUnconfirmButtonClickFactory}
                                                      key={notification.id} />)
                                }
                            </List>
                            <div className={Style.loadMoreButtonWrapper}>
                                <Button type={'primary'}
                                        disabled={loading}
                                        loading={loading}
                                        onClick={onLoadMoreButtonClick}>加载更多</Button>
                            </div>
                        </>) : <Empty description={'没有消息'} />
                    }
                </Spin>
            </Card>
        </div>);
}

export default React.memo(Notifications);