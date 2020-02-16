import axios, {AxiosResponse} from 'axios';
import {Repository as RepositoryClass, ResponseBody} from '../../Class';
import {notification} from 'antd';
import {CREATE, DEL, FORK, GET_REPOSITORIES} from './ROUTE';
import {errorHandler} from '../Function';

export async function getRepositories(start: number, end: number, username?: Readonly<string>): Promise<Readonly<Array<Readonly<RepositoryClass>>> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<Readonly<RepositoryClass>>>> =
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

export async function create(repository: Readonly<Omit<RepositoryClass, 'username'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(CREATE, repository);
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

export async function del(repository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(DEL, repository);
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

export async function fork(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(FORK, repository);
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