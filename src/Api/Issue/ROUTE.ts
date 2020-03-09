import {prefix} from '../Function';

function issuePrefix(url: string): string
{
    return prefix(`/issue${url}`);
}

export const ADD = issuePrefix('/add');
export const CLOSE = issuePrefix('/close');
export const REOPEN = issuePrefix('/reopen');
export const GET_BY_REPOSITORY = issuePrefix('/getByRepository');
export const GET_AMOUNT_BY_REPOSITORY = issuePrefix('/getAmountByRepository');
export const GET = issuePrefix('/get');
export const GET_COMMENTS = issuePrefix('/getComments');
export const ADD_COMMENT = issuePrefix('/addComment');