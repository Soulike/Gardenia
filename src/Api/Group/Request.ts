import {Account, Group, Repository, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {
    ACCOUNTS,
    ADD,
    ADD_ACCOUNTS,
    ADD_ADMINS,
    ADD_REPOSITORY,
    ADMINS,
    DISMISS,
    GET_ADMINISTRATING_BY_ACCOUNT,
    GET_BY_ACCOUNT,
    GET_BY_REPOSITORY,
    INFO,
    IS_ADMIN,
    REMOVE_ACCOUNTS,
    REMOVE_ADMINS,
    REMOVE_REPOSITORIES,
    REPOSITORIES,
} from './ROUTE';

export async function add(group: Readonly<Omit<Group, 'id'>>): Promise<Readonly<Pick<Group, 'id'>> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Pick<Group, 'id'>>> = await axios.post(ADD,
            {group});
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

export async function dismiss(group: Readonly<Pick<Group, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(DISMISS,
            {group});
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

export async function info(group: Readonly<Pick<Group, 'id'>>): Promise<Readonly<Group> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Group>> = await axios.get(INFO,
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function accounts(group: Readonly<Pick<Group, 'id'>>): Promise<Readonly<Readonly<Account>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Account>[]>> = await axios.get(ACCOUNTS,
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function addAccounts(group: Readonly<Pick<Group, 'id'>>, usernames: Readonly<string[]>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(ADD_ACCOUNTS,
            {group, usernames});
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

export async function removeAccounts(group: Readonly<Pick<Group, 'id'>>, usernames: Readonly<string[]>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(REMOVE_ACCOUNTS,
            {group, usernames});
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

export async function getByAccount(account: Pick<Account, 'username'>): Promise<Readonly<Readonly<Group>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Group>[]>> = await axios.get(GET_BY_ACCOUNT, {
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

export async function getAdministratingByAccount(account: Pick<Account, 'username'>): Promise<Readonly<Readonly<Group>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Group>[]>> = await axios.get(GET_ADMINISTRATING_BY_ACCOUNT,
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

export async function admins(group: Readonly<Pick<Group, 'id'>>): Promise<Readonly<Readonly<Account>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Account>[]>> = await axios.get(ADMINS,
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function addAdmins(group: Readonly<Pick<Group, 'id'>>, usernames: Readonly<string[]>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(ADD_ADMINS,
            {group, usernames});
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

export async function removeAdmins(group: Readonly<Pick<Group, 'id'>>, usernames: Readonly<string[]>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(REMOVE_ADMINS,
            {group, usernames});
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

export async function getByRepository(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<Readonly<Group[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Group[]>> = await axios.get(GET_BY_REPOSITORY, {
            params: {
                json: {repository},
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

export async function repositories(group: Readonly<Pick<Group, 'id'>>): Promise<Readonly<Readonly<Repository>[]> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Readonly<Repository>[]>> = await axios.get(REPOSITORIES,
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function addRepository(repository: Readonly<Pick<Repository, 'username' | 'name'>>, group: Readonly<Pick<Group, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(ADD_REPOSITORY, {repository, group});
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

export async function removeRepositories(group: Readonly<Pick<Group, 'id'>>, repositories: Readonly<Pick<Repository, 'username' | 'name'>[]>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(REMOVE_REPOSITORIES,
            {group, repositories});
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

export async function isAdmin(group: Readonly<Pick<Group, 'id'>>): Promise<Readonly<{ isAdmin: boolean }> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isAdmin: boolean }>> = await axios.get(IS_ADMIN,
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}