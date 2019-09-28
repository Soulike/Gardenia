import {prefix} from '../Function';

function accountPrefix(url: string): string
{
    return prefix(`/account${url}`);
}

export const LOGIN = accountPrefix('/login');
export const REGISTER = accountPrefix('/register');