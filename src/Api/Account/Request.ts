import axios, {AxiosResponse} from 'axios';
import {Account, Group, Profile, ResponseBody} from '../../Class';
import {CHECK_PASSWORD, CHECK_SESSION, GET_ADMINISTRATING_GROUPS, GET_GROUPS, LOGIN, LOGOUT, REGISTER} from './ROUTE';

export async function login(account: Readonly<Account>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(LOGIN, account);
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

export async function register(account: Readonly<Account>, profile: Readonly<Omit<Profile, 'username'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(REGISTER, {
            account, profile,
        });
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

export async function checkSession(): Promise<Readonly<{ isValid: boolean }> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isValid: boolean }>> =
            await axios.get(CHECK_SESSION, {
                params: {_t: Date.now()},   // 不允许缓存
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

export async function checkPassword(account: Readonly<Pick<Account, 'hash'>>): Promise<Readonly<{ isCorrect: boolean }> | null>
{
    try
    {
        const {hash} = account;
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isCorrect: boolean }>> =
            await axios.post(CHECK_PASSWORD, {hash});
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

export async function logout(): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(LOGOUT);
        return isSuccessful ? true : null;
    }
    catch (e)
    {
        return null;
    }
}

export async function getGroups(account: Pick<Account, 'username'>): Promise<Readonly<Readonly<Group>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Group>[]>> = await axios.get(GET_GROUPS, {
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
        return null;
    }
}

export async function getAdministratingGroups(account: Pick<Account, 'username'>): Promise<Readonly<Readonly<Group>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Group>[]>> = await axios.get(GET_ADMINISTRATING_GROUPS,
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}