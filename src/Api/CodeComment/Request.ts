import {CodeComment, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {ADD, DEL, GET, UPDATE} from './ROUTE';

export async function add(codeComment: Pick<CodeComment, 'repositoryUsername' | 'repositoryName' | 'filePath' | 'columnNumber' | 'content' | 'creationCommitHash'>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(ADD, codeComment);
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

export async function del(codeComment: Pick<CodeComment, 'id'>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(DEL, codeComment);
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

export async function get(codeComment: Readonly<Pick<CodeComment, 'repositoryUsername' | 'repositoryName' | 'filePath'> & Partial<Pick<CodeComment, 'columnNumber'>>>,
                          commitHash: string): Promise<{ codeComments: CodeComment[] } | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ codeComments: CodeComment[] }>> = await axios.get(GET, {
            params: {
                json: JSON.stringify({codeComment, commitHash}),
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

export async function update(codeComment: Readonly<Pick<CodeComment, 'content'>>,
                             primaryKey: Readonly<Pick<CodeComment, 'id'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(UPDATE, {codeComment, primaryKey});
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