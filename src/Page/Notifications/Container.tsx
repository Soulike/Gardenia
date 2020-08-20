import React, {PureComponent} from 'react';
import View from './View';
import {Notification as NotificationClass, Notification} from '../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Notification as NotificationApi} from '../../Api';
import {promisify} from 'util';
import {notification} from 'antd';

interface IProps
{

}

interface IState
{
    unconfirmedNotificationCount: number,
    notifications: Notification[],
    loading: boolean,
    lastLoadPosition: number,
    loadEnd: boolean,
}

class Notifications extends PureComponent<IProps, IState>
{
    private static readonly NOTIFICATION_AMOUNT_PER_PAGE = 20;
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            notifications: [],
            loading: false,
            lastLoadPosition: 0,
            loadEnd: false,
            unconfirmedNotificationCount: 0,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await Promise.all([
            this.loadNotificationCount(),
            this.loadMoreNotifications(),
        ]);
        await this.setStatePromise({loading: false});
    }

    loadNotificationCount = async () =>
    {
        const countWrapper = await NotificationApi.getCount({confirmed: false});
        if (countWrapper !== null)
        {
            const {count} = countWrapper;
            await this.setStatePromise({unconfirmedNotificationCount: count});
        }
    };

    onSetConfirmedButtonClickFactory = (id: NotificationClass['id'], confirmed: NotificationClass['confirmed']) =>
    {
        return async () =>
        {
            await this.setStatePromise({loading: true});
            const result = await NotificationApi.setConfirmed([{id}], confirmed);
            if (result !== null)
            {
                const {notifications, unconfirmedNotificationCount} = this.state;
                const notificationsCopy = [...notifications];
                for (let i = 0; i < notificationsCopy.length; i++)
                {
                    if (notificationsCopy[i].id === id)
                    {
                        const {id, timestamp, content, type, username} = notificationsCopy[i];
                        notificationsCopy[i] = new Notification(id, username,
                            content, type, timestamp, confirmed);
                        break;
                    }
                }
                await this.setStatePromise({
                    notifications: notificationsCopy,
                    unconfirmedNotificationCount: unconfirmedNotificationCount + (confirmed ? -1 : 1),
                });
            }
            await this.setStatePromise({loading: false});
        };
    };

    onConfirmButtonClickFactory: (id: NotificationClass['id']) => ButtonProps['onClick'] = id =>
    {
        return this.onSetConfirmedButtonClickFactory(id, true);
    };

    onUnconfirmButtonClickFactory: (id: NotificationClass['id']) => ButtonProps['onClick'] = id =>
    {
        return this.onSetConfirmedButtonClickFactory(id, false);
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        await this.loadMoreNotifications();
    };

    loadMoreNotifications = async () =>
    {
        const {loadEnd, lastLoadPosition} = this.state;
        if (!loadEnd)
        {
            await this.setStatePromise({loading: true});
            const notificationsWrapper = await NotificationApi.get({},
                lastLoadPosition, Notifications.NOTIFICATION_AMOUNT_PER_PAGE);
            if (notificationsWrapper !== null)
            {
                const {notifications} = notificationsWrapper;
                if (notifications.length < Notifications.NOTIFICATION_AMOUNT_PER_PAGE)
                {
                    notification.success({message: '已加载所有消息'});
                    await this.setStatePromise({loadEnd: true});
                }
                await this.setStatePromise({
                    notifications: [...this.state.notifications, ...notifications],
                    loading: false,
                    lastLoadPosition: lastLoadPosition + Notifications.NOTIFICATION_AMOUNT_PER_PAGE,
                });
            }
        }
        else
        {
            notification.success({message: '已加载所有消息'});
        }
    };

    render()
    {
        const {notifications, loading, unconfirmedNotificationCount} = this.state;
        return (<View notifications={notifications}
                      unconfirmedNotificationCount={unconfirmedNotificationCount}
                      loading={loading}
                      onConfirmButtonClickFactory={this.onConfirmButtonClickFactory}
                      onUnconfirmButtonClickFactory={this.onUnconfirmButtonClickFactory}
                      onLoadMoreButtonClick={this.onLoadMoreButtonClick} />);
    }
}

export default Notifications;