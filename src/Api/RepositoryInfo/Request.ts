import {Commit, Group, Repository as RepositoryClass, Repository, ResponseBody} from '../../Class';
import {notification} from 'antd';
import axios, {AxiosResponse} from 'axios';
import {
    ADD_TO_GROUP,
    BRANCH,
    COMMIT_COUNT,
    DIRECTORY,
    FILE_INFO,
    GROUPS,
    LAST_COMMIT,
    RAW_FILE,
    REPOSITORY,
    SET_DESCRIPTION,
    SET_IS_PUBLIC,
    SET_NAME,
} from './ROUTE';
import {ObjectType} from '../../CONSTANT';
import {errorHandler} from '../Function';

export async function repository(username: string, repositoryName: string): Promise<RepositoryClass | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<RepositoryClass>> =
            await axios.get(REPOSITORY, {
                params: {
                    json: JSON.stringify({username, repositoryName}),
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

export async function branch(username: string, repositoryName: string): Promise<Array<string> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<string>>> =
            await axios.get(BRANCH, {
                params: {
                    json: JSON.stringify({username, repositoryName}),
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

export async function lastCommit(username: string, repositoryName: string, commitHash: string, filePath?: string): Promise<Commit | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Commit>> =
            await axios.get(LAST_COMMIT, {
                params: {
                    json: JSON.stringify({username, repositoryName, commitHash, filePath}),
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

export async function directory(username: string, repositoryName: string, commitHash: string, directoryPath: string): Promise<Array<{ type: ObjectType, path: string, commit: Commit }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<{ type: ObjectType, path: string, commit: Commit }>>> =
            await axios.get(DIRECTORY, {
                params: {
                    json: JSON.stringify({username, repositoryName, commitHash, directoryPath}),
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

export async function commitCount(username: string, repositoryName: string, commitHash: string): Promise<{ commitCount: number } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commitCount: number }>> =
            await axios.get(COMMIT_COUNT, {
                params: {
                    json: JSON.stringify({username, repositoryName, commitHash}),
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

export async function fileInfo(username: string, repositoryName: string, filePath: string, commitHash: string): Promise<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }>> =
            await axios.get(FILE_INFO, {
                params: {
                    json: JSON.stringify({username, repositoryName, filePath, commitHash}),
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

export async function rawFile(username: string, repositoryName: string, filePath: string, commitHash: string): Promise<Blob | null>
{
    try
    {
        const {data}: AxiosResponse<Blob> =
            await axios.get(RAW_FILE, {
                params: {
                    json: JSON.stringify({username, repositoryName, filePath, commitHash}),
                },
                responseType: 'blob',
                transformResponse: data => data,    // 明确告知 axios 不要对返回的数据做任何处理
            });
        return data;
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function setName(repositoryName: string, newRepositoryName: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_NAME, {repositoryName, newRepositoryName});
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

export async function setDescription(repositoryName: string, description: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_DESCRIPTION, {repositoryName, description});
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

export async function setIsPublic(repository: Pick<Repository, 'name' | 'isPublic'>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_IS_PUBLIC, {repository});
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

export async function groups(repository: Pick<Repository, 'username' | 'name'>): Promise<Group[] | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Group[]>> = await axios.get(GROUPS, {
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

export async function addToGroup(repository: Pick<Repository, 'username' | 'name'>, group: Pick<Group, 'id'>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(ADD_TO_GROUP, {repository, group});
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