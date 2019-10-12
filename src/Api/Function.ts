import {notification} from 'antd';

export function prefix(url: string): string
{
    return `/server${url}`;
}

export function errorHandler(e: any): void
{
    console.error(e);
    notification.error({message: '网络异常'});
}