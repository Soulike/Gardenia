import axios, {AxiosResponse} from 'axios';
import {Repository as RepositoryClass, ResponseBody} from '../../Class';
import {notification} from 'antd';
import {CREATE, DEL, GET_FILE, GET_PERSONAL_LIST, GET_PUBLIC_LIST} from './ROUTE';

export namespace Repository
{
    export async function getPublicList(start: number, end: number, username?: string): Promise<Array<RepositoryClass> | null>
    {
        try
        {
            const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<RepositoryClass>>> =
                await axios.get(GET_PUBLIC_LIST, {
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

    export async function getPersonalList(start: number, end: number): Promise<Array<RepositoryClass> | null>
    {
        try
        {
            const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<RepositoryClass>>> =
                await axios.get(GET_PERSONAL_LIST, {
                    params: {
                        json: JSON.stringify({start, end}),
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

    export async function getFile(username: string, repositoryName: string, filePath: string, hash: string): Promise<{ isBinary: boolean, content?: string } | null>
    {
        try
        {
            const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ isBinary: boolean, content?: string }>> =
                await axios.get(GET_FILE, {
                    params: {
                        json: JSON.stringify({username, repositoryName, filePath, hash}),
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
}