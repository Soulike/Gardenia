import {Notification, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {GET, GET_COUNT, SET_CONFIRMED} from './ROUTE';

export async function get(notification: Readonly<Pick<Notification, 'username' | 'confirmed'>>,
                          offset: number, limit: number): Promise<{ notifications: Notification[] } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ notifications: Notification[] }>> =
            await axios.get(GET, {
                params: {
                    json: JSON.stringify({notification, offset, limit}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function getCount(notification: Readonly<Pick<Notification, 'username' | 'confirmed'>>): Promise<{ count: number } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ count: number }>> =
            await axios.get(GET_COUNT, {
                params: {
                    json: JSON.stringify({notification}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function setConfirmed(notifications: Readonly<Pick<Notification, 'id'>>[],
                                   confirmed: Readonly<Notification['confirmed']>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(SET_CONFIRMED, {notifications, confirmed});
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}