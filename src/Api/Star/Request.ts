import axios, {AxiosResponse} from 'axios';
import {Account, Profile, Repository, ResponseBody} from '../../Class';
import {
    ADD,
    GET_REPOSITORY_STAR_AMOUNT,
    GET_REPOSITORY_STAR_USERS,
    GET_STARED_REPOSITORIES,
    GET_STARED_REPOSITORIES_AMOUNT,
    IS_STARED_REPOSITORY,
    REMOVE,
} from './ROUTE';
import nProgress from 'nprogress';

export async function add(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(ADD, {repository});
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

export async function remove(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(REMOVE, {repository});
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

export async function getStaredRepositories(account?: Readonly<Pick<Account, 'username'>>): Promise<{ repositories: Repository[] } | null>
{
    nProgress.start();
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ repositories: Repository[] }>> = await axios.get(GET_STARED_REPOSITORIES, {
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
    finally
    {
        nProgress.done();
    }
}

export async function getStaredRepositoriesAmount(account?: Readonly<Pick<Account, 'username'>>): Promise<{ amount: number } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ amount: number }>> = await axios.get(GET_STARED_REPOSITORIES_AMOUNT, {
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function isStaredRepository(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ isStared: boolean } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isStared: boolean }>> = await axios.get(IS_STARED_REPOSITORY, {
            params: {
                json: JSON.stringify({repository}),
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

export async function getRepositoryStarAmount(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ amount: number } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ amount: number }>> = await axios.get(GET_REPOSITORY_STAR_AMOUNT, {
            params: {
                json: JSON.stringify({repository}),
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

export async function getRepositoryStarUsers(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ users: Profile[] } | null>
{
    nProgress.start();
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ users: Profile[] }>> = await axios.get(GET_REPOSITORY_STAR_USERS, {
            params: {
                json: JSON.stringify({repository}),
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
    finally
    {
        nProgress.done();
    }
}