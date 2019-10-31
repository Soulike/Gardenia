import axios, {AxiosResponse} from 'axios';
import {Account, Group, Profile, ResponseBody} from '../../Class';
import {CHECK_SESSION, GET_ADMINISTRATING_GROUPS, GET_GROUPS, LOGIN, LOGOUT, REGISTER} from './ROUTE';
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

export async function logout(): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody<void>> = await axios.post(LOGOUT);
        return isSuccessful ? true : null;
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function getGroups(username: string): Promise<Group[] | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Group[]>> = await axios.get(GET_GROUPS, {
            params: {
                json: {username},
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

export async function getAdministratingGroups(username: string): Promise<Group[] | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Group[]>> = await axios.get(GET_ADMINISTRATING_GROUPS,
            {
                params: {
                    json: {
                        username,
                    },
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