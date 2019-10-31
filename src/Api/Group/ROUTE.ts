import {prefix} from '../Function';

function groupPrefix(url: string): string
{
    return prefix(`/group${url}`);
}

export const ADD = groupPrefix('/add');
export const DISMISS = groupPrefix('/dismiss');
export const INFO = groupPrefix('/info');
export const ACCOUNTS = groupPrefix('/accounts');
export const ADD_ACCOUNTS = groupPrefix('/addAccounts');
export const REMOVE_ACCOUNTS = groupPrefix('/removeAccounts');
export const ADMINS = groupPrefix('/admins');
export const ADD_ADMINS = groupPrefix('/addAdmins');
export const REMOVE_ADMINS = groupPrefix('/removeAdmins');
export const REPOSITORIES = groupPrefix('/repositories');
export const REMOVE_REPOSITORIES = groupPrefix('/removeRepositories');