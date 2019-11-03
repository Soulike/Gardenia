import axios, {AxiosResponse} from 'axios';
import {Repository as RepositoryClass, ResponseBody} from '../../Class';
import {notification} from 'antd';
import {CREATE, DEL, GET_LIST} from './ROUTE';
import {errorHandler} from '../Function';

export async function getList(start: number, end: number, username?: Readonly<string>): Promise<Readonly<Array<Readonly<RepositoryClass>>> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<Readonly<RepositoryClass>>>> =
            await axios.get(GET_LIST, {
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

export async function create(repository: Readonly<RepositoryClass>): Promise<true | null>
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

export async function del(repositoryName: Readonly<string>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(DEL, {repositoryName});
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