import axios, {AxiosResponse} from 'axios';
import {Account, Group, Profile, ResponseBody} from '../../Class';
import {CHECK_PASSWORD, CHECK_SESSION, GET_ADMINISTRATING_GROUPS, GET_GROUPS, LOGIN, LOGOUT, REGISTER} from './ROUTE';
import {notification} from 'antd';
import {errorHandler} from '../Function';

export async function login(account: Readonly<Account>): Promise<true | null>
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

export async function register(account: Readonly<Account>, profile: Readonly<Omit<Profile, 'username'>>): Promise<true | null>
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

export async function checkSession(): Promise<Readonly<{ isValid: boolean }> | null>
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

export async function checkPassword(account: Readonly<Pick<Account, 'hash'>>): Promise<Readonly<{ isCorrect: boolean }> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isCorrect: boolean }>> = await axios.get(CHECK_PASSWORD, {
            params: {
                json: JSON.stringify(account),
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

export async function getGroups(account: Pick<Account, 'username'>): Promise<Readonly<Readonly<Group>[]> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Readonly<Group>[]>> = await axios.get(GET_GROUPS, {
            params: {
                json: JSON.stringify(account),
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

export async function getAdministratingGroups(account: Pick<Account, 'username'>): Promise<Readonly<Readonly<Group>[]> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Readonly<Group>[]>> = await axios.get(GET_ADMINISTRATING_GROUPS,
            {
                params: {
                    json: JSON.stringify(account),
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