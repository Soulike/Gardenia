import React, {useEffect, useState} from 'react';
import {Account, Notification as NotificationApi} from '../../../../Api';
import View from './View';
import {useHistory} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {notification} from 'antd';
import {useDispatch} from 'react-redux';
import {setLoggedOutAction} from '../../Action/Action';

interface IProps
{
    readonly username: string,
    readonly avatar: string,
}

function LoggedInMenu(props: IProps)
{
    const {username, avatar} = props;
    const [unconfirmedNotificationCount,
        setUnconfirmedNotificationCount] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    // 加载通知个数
    useEffect(() =>
    {
        NotificationApi.getCount({confirmed: false})
            .then(countWrapper =>
            {
                if (countWrapper !== null)
                {
                    const {count} = countWrapper;
                    setUnconfirmedNotificationCount(count);
                }
            });
    }, [username]);

    const onLogoutClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const result = await Account.logout();
        if (result !== null)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
            dispatch(setLoggedOutAction());
            notification.success({message: '退出登录成功'});
        }
    };

    return (
        <View
            username={username}
            avatar={avatar}
            unconfirmedNotificationCount={unconfirmedNotificationCount}
            onLogoutClick={onLogoutClick} />
    );
}

export default React.memo(LoggedInMenu);