import axios, {AxiosResponse} from 'axios';
import {Account, Profile, ResponseBody} from '../../Class';
import {CHECK_SESSION, LOGIN, REGISTER} from './ROUTE';
import {notification} from 'antd';
import {errorHandler} from '../Function';

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
        errorHandler(e);
        return null;
    }
}

export async function register(account: Account, profile: Omit<Profile, 'username'>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(REGISTER, {
            account, profile,
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
        errorHandler(e);
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
        errorHandler(e);
        return null;
    }
}