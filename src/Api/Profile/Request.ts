import {Profile, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {notification} from 'antd';
import {GET} from './ROUTE';

export async function get(username: string): Promise<Profile | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Profile>> =
            await axios.get(GET, {
                params: {
                    json: JSON.stringify({username}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        console.error(e);
        notification.error({message: '网络异常'});
        return null;
    }
}