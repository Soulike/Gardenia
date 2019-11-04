import {Account, Profile, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {notification} from 'antd';
import {GET} from './ROUTE';
import {errorHandler} from '../Function';

export async function get(account?: Readonly<Pick<Account, 'username'>>): Promise<Readonly<Profile> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Profile>> =
            await axios.get(GET, {
                params: {
                    json: JSON.stringify({account}),
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
        errorHandler(e);
        return null;
    }
}