import {prefix} from '../Function';

function repositoryPrefix(url: string): string
{
    return prefix(`/repository${url}`);
}

export const GET_LIST = repositoryPrefix('/getList');
export const CREATE = repositoryPrefix('/create');
export const DEL = repositoryPrefix('/del');