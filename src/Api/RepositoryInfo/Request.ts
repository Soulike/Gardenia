import {Commit, Repository as RepositoryClass, ResponseBody} from '../../Class';
import {notification} from 'antd';
import axios, {AxiosResponse} from 'axios';
import {BRANCH, DIRECTORY, LAST_COMMIT, REPOSITORY} from './ROUTE';
import {ObjectType} from '../../CONSTANT';

export async function repository(username: string, name: string): Promise<RepositoryClass | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<RepositoryClass>> =
            await axios.get(REPOSITORY, {
                params: {
                    json: JSON.stringify({username, name}),
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

export async function branch(username: string, name: string): Promise<Array<string> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<string>>> =
            await axios.get(BRANCH, {
                params: {
                    json: JSON.stringify({username, name}),
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

export async function lastCommit(username: string, name: string, branch: string): Promise<Commit | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Commit>> =
            await axios.get(LAST_COMMIT, {
                params: {
                    json: JSON.stringify({username, name, branch}),
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

export async function directory(username: string, name: string, branch: string, path: string): Promise<Array<{ type: ObjectType, path: string, commit: Commit }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<{ type: ObjectType, path: string, commit: Commit }>>> =
            await axios.get(DIRECTORY, {
                params: {
                    json: JSON.stringify({username, name, branch, path}),
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