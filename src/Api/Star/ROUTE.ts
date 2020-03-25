import {prefix} from '../Function';

function starPrefix(url: string): string
{
    return prefix(`/star${url}`);
}

export const ADD = starPrefix('/add');
export const REMOVE = starPrefix('/remove');
export const GET_STARED_REPOSITORIES = starPrefix('/getStaredRepositories');
export const GET_STARED_REPOSITORIES_AMOUNT = starPrefix('/getStaredRepositoriesAmount');
export const IS_STARED_REPOSITORY = starPrefix('/isStaredRepository');
export const GET_REPOSITORY_STAR_AMOUNT = starPrefix('/getRepositoryStarAmount');
export const GET_REPOSITORY_STAR_USERS = starPrefix('/getRepositoryStarUsers');