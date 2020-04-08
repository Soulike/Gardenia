import {prefix} from '../Function';

function codeCommentPrefix(url: string): string
{
    return prefix(`/codeComment${url}`);
}

export const ADD = codeCommentPrefix('/add');
export const DEL = codeCommentPrefix('/del');
export const GET = codeCommentPrefix('/get');
export const UPDATE = codeCommentPrefix('/update');