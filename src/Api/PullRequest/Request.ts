import axios, {AxiosResponse} from 'axios';
import {Commit, Conflict, FileDiff, PullRequest, PullRequestComment, Repository, ResponseBody} from '../../Class';
import {notification} from 'antd';
import {errorHandler} from '../Function';
import {
    ADD,
    ADD_COMMENT,
    CLOSE,
    GET,
    GET_BY_REPOSITORY,
    GET_COMMENTS,
    GET_COMMIT_AMOUNT,
    GET_COMMITS,
    GET_CONFLICTS,
    GET_FILE_DIFFS,
    GET_PULL_REQUEST_AMOUNT,
    IS_MERGEABLE,
    MERGE,
    REOPEN,
    RESOLVE_CONFLICTS,
    UPDATE,
    UPDATE_COMMENT,
} from './ROUTE';
import {PULL_REQUEST_STATUS} from '../../CONSTANT';

export async function add(pullRequest: Readonly<Omit<PullRequest, 'id' | 'no' | 'sourceRepositoryCommitHash' | 'targetRepositoryCommitHash' | 'creationTime' | 'modificationTime' | 'status'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(ADD, pullRequest);
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

export async function update(primaryKey: Readonly<Pick<PullRequest, 'id'>>, pullRequest: Readonly<Partial<Pick<PullRequest, 'title' | 'content'>>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(UPDATE, {primaryKey, pullRequest});
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

export async function close(pullRequest: Readonly<Pick<PullRequest, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(CLOSE, pullRequest);
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

export async function reopen(pullRequest: Readonly<Pick<PullRequest, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(REOPEN, pullRequest);
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

export async function isMergeable(pullRequest: Readonly<Pick<PullRequest, 'id'>>): Promise<{ isMergeable: boolean } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ isMergeable: boolean }>> =
            await axios.get(IS_MERGEABLE, {
                params: {
                    json: JSON.stringify(pullRequest),
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

export async function merge(pullRequest: Readonly<Pick<PullRequest, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(MERGE, pullRequest);
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

export async function get(repository: Readonly<Pick<Repository, 'username' | 'name'>>, pullRequest: Readonly<Pick<PullRequest, 'no'>>): Promise<PullRequest | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<PullRequest>> =
            await axios.get(GET, {
                params: {
                    json: JSON.stringify({repository, pullRequest}),
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

export async function getByRepository(repository: Readonly<Pick<Repository, 'username' | 'name'>>, status: PULL_REQUEST_STATUS | undefined, offset: number, limit: number): Promise<{ pullRequests: PullRequest[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ pullRequests: PullRequest[] }>> =
            await axios.get(GET_BY_REPOSITORY, {
                params: {
                    json: JSON.stringify({repository, status, offset, limit}),
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

export async function getPullRequestAmount(repository: Readonly<Pick<Repository, 'username' | 'name'>>, status: PULL_REQUEST_STATUS | undefined): Promise<{ amount: number } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ amount: number }>> =
            await axios.get(GET_PULL_REQUEST_AMOUNT, {
                params: {
                    json: JSON.stringify({repository, status}),
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

export async function addComment(pullRequestComment: Readonly<Omit<PullRequestComment, 'id' | 'username' | 'creationTime' | 'modificationTime'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(ADD_COMMENT, pullRequestComment);
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

export async function updateComment(primaryKey: Readonly<Pick<PullRequestComment, 'id'>>, pullRequestComment: Readonly<Pick<PullRequestComment, 'content'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(UPDATE_COMMENT, {primaryKey, pullRequestComment});
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

export async function getComments(repository: Readonly<Pick<Repository, 'username' | 'name'>>, pullRequest: Readonly<Pick<PullRequest, 'no'>>): Promise<{ comments: PullRequestComment[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ comments: PullRequestComment[] }>> =
            await axios.get(GET_COMMENTS, {
                params: {
                    json: JSON.stringify({repository, pullRequest}),
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

export async function getConflicts(pullRequest: Readonly<Pick<PullRequest, 'id'>>): Promise<{ conflicts: Conflict[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ conflicts: Conflict[], }>> =
            await axios.get(GET_CONFLICTS, {
                params: {
                    json: JSON.stringify(pullRequest),
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

export async function resolveConflicts(pullRequest: Readonly<Pick<PullRequest, 'id'>>, conflicts: Readonly<Conflict[]>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(RESOLVE_CONFLICTS, {pullRequest, conflicts});
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

export async function getCommits(pullRequest: Readonly<Pick<PullRequest, 'id'>>, offset: number = 0, limit: number = Number.MAX_SAFE_INTEGER): Promise<{ commits: Commit[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commits: Commit[] }>> =
            await axios.get(GET_COMMITS, {
                params: {json: JSON.stringify({pullRequest, offset, limit})},
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

export async function getCommitAmount(pullRequest: Readonly<Pick<PullRequest, 'id'>>): Promise<{ commitAmount: number } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ commitAmount: number }>> =
            await axios.get(GET_COMMIT_AMOUNT, {
                params: {json: JSON.stringify(pullRequest)},
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

export async function getFileDiffs(pullRequest: Readonly<Pick<PullRequest, 'id'>>, offset: number = 0, limit: number = Number.MAX_SAFE_INTEGER): Promise<{ fileDiffs: FileDiff[] } | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<{ fileDiffs: FileDiff[] }>> =
            await axios.get(GET_FILE_DIFFS, {
                params: {json: JSON.stringify({pullRequest, offset, limit})},
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