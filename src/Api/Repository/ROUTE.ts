import {prefix} from '../Function';

function repositoryPrefix(url: string): string
{
    return prefix(`/repository${url}`);
}

export const GET_PUBLIC_LIST = repositoryPrefix('/getPublicList');
export const GET_PERSONAL_LIST = repositoryPrefix('/getPersonalList');
export const CREATE = repositoryPrefix('/create');
export const DEL = repositoryPrefix('/del');
export const GET_FILE = repositoryPrefix('/getFile');