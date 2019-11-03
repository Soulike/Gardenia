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

export async function repository(username: Readonly<string>, repositoryName: Readonly<string>): Promise<Readonly<RepositoryClass> | null>
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

export async function branch(username: Readonly<string>, repositoryName: Readonly<string>): Promise<Readonly<Array<string>> | null>
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

export async function lastCommit(username: Readonly<string>, repositoryName: Readonly<string>, commitHash: Readonly<string>, filePath?: Readonly<string>): Promise<Readonly<Commit> | null>
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

export async function directory(username: Readonly<string>, repositoryName: Readonly<string>, commitHash: Readonly<string>, directoryPath: Readonly<string>): Promise<Readonly<Array<Readonly<{ type: ObjectType, path: Readonly<string>, commit: Commit }>>> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<Readonly<{ type: ObjectType, path: Readonly<string>, commit: Commit }>>>> =
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

export async function commitCount(username: Readonly<string>, repositoryName: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<{ commitCount: number }> | null>
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

export async function fileInfo(username: Readonly<string>, repositoryName: Readonly<string>, filePath: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }> | null>
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

export async function rawFile(username: Readonly<string>, repositoryName: Readonly<string>, filePath: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<Blob> | null>
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

export async function setName(repositoryName: Readonly<string>, newRepositoryName: Readonly<string>): Promise<true | null>
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

export async function setDescription(repositoryName: Readonly<string>, description: Readonly<string>): Promise<true | null>
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

export async function setIsPublic(repository: Readonly<Pick<Repository, 'name' | 'isPublic'>>): Promise<true | null>
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

export async function groups(repository: Readonly<Pick<Repository, 'username' | 'name'>>): Promise<Readonly<Group[]> | null>
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

export async function addToGroup(repository: Readonly<Pick<Repository, 'username' | 'name'>>, group: Readonly<Pick<Group, 'id'>>): Promise<true | null>
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