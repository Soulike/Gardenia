import axios, {AxiosResponse} from 'axios';
import {Repository, Repository as RepositoryClass, ResponseBody} from '../../Class';
import {CREATE, DEL, FORK, GET_REPOSITORIES, IS_MERGEABLE, SEARCH, SHOULD_SHOW_OPTIONS} from './ROUTE';
import nProgress from 'nprogress';

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

export async function search(keyword: string, offset: number, limit: number): Promise<{ repositories: Repository[] } | null>
{
    nProgress.start();
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ repositories: Repository[] }>> =
            await axios.post(SEARCH, {keyword, offset, limit});
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

export async function shouldShowOptions(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<{ showOptions: boolean } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ showOptions: boolean }>> =
            await axios.get(SHOULD_SHOW_OPTIONS, {
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