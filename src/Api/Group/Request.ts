import {Group, Repository, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {notification} from 'antd';
import {errorHandler} from '../Function';
import {
    ACCOUNTS,
    ADD,
    ADD_ACCOUNTS,
    ADD_ADMINS,
    ADMINS,
    DISMISS,
    INFO,
    REMOVE_ACCOUNTS,
    REMOVE_ADMINS,
    REMOVE_REPOSITORIES,
    REPOSITORIES,
} from './ROUTE';

export async function add(group: Omit<Group, 'id'>): Promise<Pick<Group, 'id'> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Pick<Group, 'id'>>> = await axios.post(ADD,
            {group});
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

export async function dismiss(group: Pick<Group, 'id'>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(DISMISS,
            {group});
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

export async function info(group: Pick<Group, 'id'>): Promise<Group | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Group>> = await axios.get(INFO,
            {
                params: {
                    json: {group},
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

export async function accounts(group: Pick<Group, 'id'>): Promise<Account[] | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Account[]>> = await axios.get(ACCOUNTS,
            {
                params: {
                    json: {group},
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

export async function addAccounts(group: Pick<Group, 'id'>, usernames: string[]): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(ADD_ACCOUNTS,
            {group, usernames});
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

export async function removeAccounts(group: Pick<Group, 'id'>, usernames: string[]): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(REMOVE_ACCOUNTS,
            {group, usernames});
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

export async function admins(group: Pick<Group, 'id'>): Promise<Account[] | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Account[]>> = await axios.get(ADMINS,
            {
                params: {
                    json: {group},
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

export async function addAdmins(group: Pick<Group, 'id'>, usernames: string[]): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(ADD_ADMINS,
            {group, usernames});
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

export async function removeAdmins(group: Pick<Group, 'id'>, usernames: string[]): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(REMOVE_ADMINS,
            {group, usernames});
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

export async function repositories(group: Pick<Group, 'id'>): Promise<Repository[] | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Repository[]>> = await axios.get(REPOSITORIES,
            {
                params: {
                    json: {group},
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

export async function removeRepositories(group: Pick<Group, 'id'>, repositories: Pick<Repository, 'username' | 'name'>[]): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(REMOVE_REPOSITORIES,
            {group, repositories});
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
