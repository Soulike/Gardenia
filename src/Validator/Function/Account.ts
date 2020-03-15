import {Account} from '../REGEXP';

export function username(username: string): boolean
{
    return Account.USERNAME.test(username);
}

export function password(password: string): boolean
{
    return Account.PASSWORD.test(password);
}

export function verificationCode(verificationCode: string): boolean
{
    return Account.VERIFICATION_CODE.test(verificationCode);
}