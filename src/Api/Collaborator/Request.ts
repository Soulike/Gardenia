import {Account, Profile, Repository, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {notification} from 'antd';
import {errorHandler} from '../Function';
import {
    ADD,
    GENERATE_CODE,
    GET_COLLABORATING_REPOSITORIES,
    GET_COLLABORATING_REPOSITORIES_AMOUNT,
    GET_COLLABORATORS,
    GET_COLLABORATORS_AMOUNT,
    REMOVE,
} from './ROUTE';

export async function generateCode(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ code: string } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ code: string }>> =
            await axios.get(GENERATE_CODE, {
                params: {json: JSON.stringify({repository})},
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

export async function add(code: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(ADD, {code});
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

export async function remove(repository: Readonly<Pick<Repository, 'username' | 'name'>>, account: Readonly<Pick<Account, 'username'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(REMOVE, {repository, account});
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

export async function getCollaborators(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ collaborators: Profile[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ collaborators: Profile[] }>> =
            await axios.get(GET_COLLABORATORS, {
                params: {json: JSON.stringify({repository})},
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

export async function getCollaboratorsAmount(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ amount: number } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ amount: number }>> =
            await axios.get(GET_COLLABORATORS_AMOUNT, {
                params: {json: JSON.stringify({repository})},
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

export async function getCollaboratingRepositories(account?: Pick<Account, 'username'>): Promise<{ repositories: Repository[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ repositories: Repository[] }>> =
            await axios.get(GET_COLLABORATING_REPOSITORIES, {
                params: {json: JSON.stringify({account})},
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

export async function getCollaboratingRepositoriesAmount(account?: Pick<Account, 'username'>): Promise<{ amount: number } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ amount: number }>> =
            await axios.get(GET_COLLABORATING_REPOSITORIES_AMOUNT, {
                params: {json: JSON.stringify({account})},
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