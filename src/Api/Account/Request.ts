import axios, {AxiosResponse} from 'axios';
import {Account, ResponseBody} from '../../Class';
import {CHECK_SESSION, LOGIN, REGISTER} from './ROUTE';
import {notification} from 'antd';

export async function login(account: Account): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(LOGIN, account);
        if (isSuccessful)
        {
            return true;
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

export async function register(username: string, hash: string, email: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(REGISTER, {
            username,
            hash,
            email,
        });
        if (isSuccessful)
        {
            return true;
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

export async function checkSession(): Promise<{ isValid: boolean } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isValid: boolean }>> = await axios.get(CHECK_SESSION);
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
        console.error(e);
        notification.error({message: '网络异常'});
        return null;
    }
}