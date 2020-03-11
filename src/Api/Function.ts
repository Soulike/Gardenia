import {notification} from 'antd';

export function prefix(url: string): string
{
    return `/server${url}`;
}

export function errorHandler(e: Readonly<any>): void
{
    console.error(e);
    notification.error({
        key: 'error-message',
        message: '网络请求失败',
        description: '如确认网络无误，请联系开发者',
    });
}