import {
    Account,
    Branch,
    Commit,
    FileDiff,
    Group,
    Repository as RepositoryClass,
    Repository,
    ResponseBody,
} from '../../Class';
import {notification} from 'antd';
import axios, {AxiosResponse} from 'axios';
import {
    ADD_TO_GROUP,
    BRANCH_NAMES,
    BRANCHES,
    COMMIT,
    COMMIT_COUNT,
    COMMIT_HISTORY,
    COMMIT_HISTORY_BETWEEN_COMMITS,
    DIFF_BETWEEN_COMMITS,
    DIRECTORY,
    FILE_COMMIT,
    FILE_COMMIT_HISTORY,
    FILE_COMMIT_HISTORY_BETWEEN_COMMITS,
    FILE_DIFF_BETWEEN_COMMITS,
    FILE_INFO,
    FORK_AMOUNT,
    FORK_FROM,
    FORK_REPOSITORIES,
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

export async function repository(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<Readonly<RepositoryClass> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<RepositoryClass>> =
            await axios.get(REPOSITORY, {
                params: {
                    json: JSON.stringify({account, repository}),
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

export async function branches(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<Readonly<{ branches: Branch[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ branches: Branch[] }>> =
            await axios.get(BRANCHES, {
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

export async function branchNames(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<Readonly<{ branchNames: string[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ branchNames: string[] }>> =
            await axios.get(BRANCH_NAMES, {
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

export async function lastCommit(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>, commitHash: Readonly<string>, filePath?: Readonly<string>): Promise<Readonly<Commit> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Commit>> =
            await axios.get(LAST_COMMIT, {
                params: {
                    json: JSON.stringify({account, repository, commitHash, filePath}),
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

export async function directory(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<RepositoryClass, 'name'>>, commitHash: Readonly<string>, directoryPath: Readonly<string>): Promise<Readonly<Array<Readonly<{ type: ObjectType, path: Readonly<string>, commit: Commit }>>> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Array<Readonly<{ type: ObjectType, path: Readonly<string>, commit: Commit }>>>> =
            await axios.get(DIRECTORY, {
                params: {
                    json: JSON.stringify({account, repository, commitHash, directoryPath}),
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

export async function commitCount(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<Repository, 'name'>>, commitHash: Readonly<string>): Promise<Readonly<{ commitCount: number }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commitCount: number }>> =
            await axios.get(COMMIT_COUNT, {
                params: {
                    json: JSON.stringify({account, repository, commitHash}),
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

export async function fileInfo(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<Repository, 'name'>>, filePath: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ exists: boolean, type?: ObjectType, size?: number, isBinary?: boolean }>> =
            await axios.get(FILE_INFO, {
                params: {
                    json: JSON.stringify({account, repository, filePath, commitHash}),
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

export async function rawFile(account: Readonly<Pick<Account, 'username'>>, repository: Readonly<Pick<Repository, 'name'>>, filePath: Readonly<string>, commitHash: Readonly<string>): Promise<Readonly<Blob> | null>
{
    try
    {
        const {data}: AxiosResponse<Blob> =
            await axios.get(RAW_FILE, {
                params: {
                    json: JSON.stringify({account, repository, filePath, commitHash}),
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

export async function setName(repository: Readonly<Pick<RepositoryClass, 'name'>>, newRepository: Readonly<Pick<RepositoryClass, 'name'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_NAME, {repository, newRepository});
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

export async function setDescription(repository: Readonly<Pick<Repository, 'name' | 'description'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET_DESCRIPTION, {repository});
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

export async function commitHistoryBetweenCommits(repository: Pick<Repository, 'username' | 'name'>, baseCommitHash: string, targetCommitHash: string): Promise<Readonly<{ commits: Commit[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commits: Commit[], }>> =
            await axios.get(COMMIT_HISTORY_BETWEEN_COMMITS, {
                params: {
                    json: JSON.stringify({repository, baseCommitHash, targetCommitHash}),
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

export async function commitHistory(repository: Pick<Repository, 'username' | 'name'>, targetCommitHash: string): Promise<Readonly<{ commits: Commit[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commits: Commit[], }>> =
            await axios.get(COMMIT_HISTORY, {
                params: {
                    json: JSON.stringify({repository, targetCommitHash}),
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

export async function fileCommitHistoryBetweenCommits(repository: Pick<Repository, 'username' | 'name'>, filePath: string, baseCommitHash: string, targetCommitHash: string): Promise<Readonly<{ commits: Commit[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commits: Commit[], }>> =
            await axios.get(FILE_COMMIT_HISTORY_BETWEEN_COMMITS, {
                params: {
                    json: JSON.stringify({repository, filePath, baseCommitHash, targetCommitHash}),
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

export async function fileCommitHistory(repository: Pick<Repository, 'username' | 'name'>, filePath: string, targetCommitHash: string): Promise<Readonly<{ commits: Commit[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commits: Commit[], }>> =
            await axios.get(FILE_COMMIT_HISTORY, {
                params: {
                    json: JSON.stringify({repository, filePath, targetCommitHash}),
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

export async function diffBetweenCommits(repository: Pick<Repository, 'username' | 'name'>, baseCommitHash: string, targetCommitHash: string): Promise<Readonly<{ diff: FileDiff[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ diff: FileDiff[], }>> =
            await axios.get(DIFF_BETWEEN_COMMITS, {
                params: {
                    json: JSON.stringify({repository, baseCommitHash, targetCommitHash}),
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

export async function fileDiffBetweenCommits(repository: Pick<Repository, 'username' | 'name'>, filePath: string, baseCommitHash: string, targetCommitHash: string): Promise<Readonly<{ diff: FileDiff }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ diff: FileDiff, }>> =
            await axios.get(FILE_DIFF_BETWEEN_COMMITS, {
                params: {
                    json: JSON.stringify({repository, filePath, baseCommitHash, targetCommitHash}),
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

export async function commit(repository: Pick<Repository, 'username' | 'name'>, commitHash: string): Promise<Readonly<{ commit: Commit, diff: FileDiff[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{
            commit: Commit,
            diff: FileDiff[]
        }>> =
            await axios.get(COMMIT, {
                params: {
                    json: JSON.stringify({repository, commitHash}),
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

export async function fileCommit(repository: Pick<Repository, 'username' | 'name'>, filePath: string, commitHash: string): Promise<Readonly<{ commit: Commit, diff: FileDiff }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{
            commit: Commit,
            diff: FileDiff
        }>> =
            await axios.get(FILE_COMMIT, {
                params: {
                    json: JSON.stringify({repository, filePath, commitHash}),
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

export async function forkAmount(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<Readonly<{ amount: number }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ amount: number }>> =
            await axios.get(FORK_AMOUNT, {
                params: {
                    json: JSON.stringify(repository),
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

export async function forkRepositories(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<Readonly<{ repositories: RepositoryClass[] }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ repositories: RepositoryClass[] }>> =
            await axios.get(FORK_REPOSITORIES, {
                params: {
                    json: JSON.stringify(repository),
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

export async function forkFrom(repository: Readonly<Pick<RepositoryClass, 'username' | 'name'>>): Promise<Readonly<{ repository: Pick<RepositoryClass, 'username' | 'name'> | null }> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ repository: Pick<RepositoryClass, 'username' | 'name'> | null }>> =
            await axios.get(FORK_FROM, {
                params: {
                    json: JSON.stringify(repository),
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