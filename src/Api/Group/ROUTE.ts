import {prefix} from '../Function';

function groupPrefix(url: string): string
{
    return prefix(`/group${url}`);
}

export const ADD = groupPrefix('/add');
export const DISMISS = groupPrefix('/dismiss');
export const INFO = groupPrefix('/info');
export const CHANGE_NAME = groupPrefix('/changeName');
export const ACCOUNTS = groupPrefix('/accounts');
export const ADD_ACCOUNT = groupPrefix('/addAccount');
export const REMOVE_ACCOUNTS = groupPrefix('/removeAccounts');
export const GET_BY_ACCOUNT = groupPrefix('/getByAccount');
export const GET_ADMINISTRATING_BY_ACCOUNT = groupPrefix('/getAdministratingByAccount');
export const ADMINS = groupPrefix('/admins');
export const ADD_ADMINS = groupPrefix('/addAdmins');
export const REMOVE_ADMINS = groupPrefix('/removeAdmins');
export const GET_BY_REPOSITORY = groupPrefix('/getByRepository');
export const REPOSITORIES = groupPrefix('/repositories');
export const ADD_REPOSITORY = groupPrefix('/addRepository');
export const REMOVE_REPOSITORIES = groupPrefix('/removeRepositories');
export const IS_ADMIN = groupPrefix('/isAdmin');