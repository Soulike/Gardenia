import axios, {AxiosResponse} from 'axios';
import {Repository as RepositoryClass, ResponseBody} from '../../Class';
import {notification} from 'antd';
import {CREATE, DEL, GET_LIST} from './ROUTE';

export async function getList(start: number, end: number, username?: string): Promise<Array<RepositoryClass> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<RepositoryClass>>> =
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
        console.error(e);
        notification.error({message: '网络异常'});
        return null;
    }
}

export async function create(repository: RepositoryClass): Promise<true | null>
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
        console.error(e);
        notification.error({message: '网络异常'});
        return null;
    }
}

export async function del(name: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> = await axios.post(DEL, {name});
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
        console.error(e);
        notification.error({message: '网络异常'});
        return null;
    }
}