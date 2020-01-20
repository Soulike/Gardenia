import {Profile} from '../REGEXP';

export function nickname(nickname: string): boolean
{
    return Profile.NICKNAME.test(nickname);
}

export function email(email: string): boolean
{
    return Profile.EMAIL.test(email);
}