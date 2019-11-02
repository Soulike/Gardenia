import {prefix} from '../Function';

function accountPrefix(url: string): string
{
    return prefix(`/account${url}`);
}

export const LOGIN = accountPrefix('/login');
export const REGISTER = accountPrefix('/register');
export const CHECK_SESSION = accountPrefix('/checkSession');
export const CHECK_PASSWORD = accountPrefix('/checkPassword');
export const LOGOUT = accountPrefix('/logout');
export const GET_GROUPS = accountPrefix('/getGroups');
export const GET_ADMINISTRATING_GROUPS = accountPrefix('/getAdministratingGroups');