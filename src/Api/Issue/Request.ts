import {Issue, IssueComment, Repository, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {ADD, ADD_COMMENT, CLOSE, GET, GET_AMOUNT_BY_REPOSITORY, GET_BY_REPOSITORY, GET_COMMENTS, REOPEN} from './ROUTE';
import {ISSUE_STATUS} from '../../CONSTANT';

export async function add(issue: Readonly<Pick<Issue, 'repositoryUsername' | 'repositoryName' | 'title'>>,
                          issueComment: Readonly<Pick<IssueComment, 'content'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(ADD, {issue, issueComment});
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

export async function close(issue: Readonly<Pick<Issue, 'repositoryUsername' | 'repositoryName' | 'no'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(CLOSE, issue);
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

export async function reopen(issue: Readonly<Pick<Issue, 'repositoryUsername' | 'repositoryName' | 'no'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(REOPEN, issue);
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

export async function getByRepository(repository: Pick<Repository, 'username' | 'name'>, status: ISSUE_STATUS | undefined,
                                      offset: number, limit: number): Promise<{ issues: Issue[] } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ issues: Issue[] }>> =
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function getAmountByRepository(repository: Readonly<Pick<Repository, 'username' | 'name'>>,
                                            status: ISSUE_STATUS | undefined): Promise<{ amount: number } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ amount: number }>> =
            await axios.get(GET_AMOUNT_BY_REPOSITORY, {
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
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function get(issue: Readonly<Pick<Issue, 'repositoryUsername' | 'repositoryName' | 'no'>>): Promise<Issue | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Issue | null>> =
            await axios.get(GET, {
                params: {
                    json: JSON.stringify(issue),
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

export async function getComments(issue: Readonly<Pick<Issue, 'repositoryUsername' | 'repositoryName' | 'no'>>,
                                  offset: number, limit: number): Promise<{ comments: IssueComment[] } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ comments: IssueComment[] }>> =
            await axios.get(GET_COMMENTS, {
                params: {
                    json: JSON.stringify({issue, offset, limit}),
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

export async function addComments(issue: Readonly<Pick<Issue, 'repositoryUsername' | 'repositoryName' | 'no'>>,
                                  issueComment: Readonly<Pick<IssueComment, 'content'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody<{ comments: IssueComment[] }>> =
            await axios.post(ADD_COMMENT, {issue, issueComment});
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