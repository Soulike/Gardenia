import axios, {AxiosResponse} from 'axios';
import {Repository, Repository as RepositoryClass, ResponseBody} from '../../Class';
import {CREATE, DEL, FORK, GET_REPOSITORIES, IS_MERGEABLE} from './ROUTE';

export async function getRepositories(start: number, end: number, username?: Readonly<string>): Promise<Readonly<Array<Readonly<RepositoryClass>>> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Array<Readonly<RepositoryClass>>>> =
            await axios.get(GET_REPOSITORIES, {
                params: {
                    json: JSON.stringify({start, end, username}),
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

export async function create(repository: Readonly<Omit<RepositoryClass, 'username'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(CREATE, repository);
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

export async function del(repository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(DEL, repository);
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

export async function fork(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(FORK, repository);
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

export async function isMergeable(sourceRepository: Readonly<Pick<Repository, 'username' | 'name'>>, sourceRepositoryBranch: string, targetRepository: Readonly<Pick<Repository, 'username' | 'name'>>, targetRepositoryBranch: string): Promise<Readonly<{ isMergeable: boolean } | null>>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isMergeable: boolean }>> =
            await axios.get(IS_MERGEABLE, {
                params: {
                    json: JSON.stringify({
                        sourceRepository,
                        sourceRepositoryBranch,
                        targetRepository,
                        targetRepositoryBranch,
                    }),
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