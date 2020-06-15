import {Account} from '../REGEXP';
import {IValidatorFunction} from '../Interface';

export const username: IValidatorFunction = username =>
{
    if (typeof username !== 'string')
    {
        return false;
    }
    else
    {
        return Account.USERNAME.test(username);
    }
};

export const password: IValidatorFunction = password =>
{
    if (typeof password !== 'string')
    {
        return false;
    }
    else
    {
        return Account.PASSWORD.test(password);
    }
};

export const hash: IValidatorFunction = hash =>
{
    if (typeof hash !== 'string')
    {
        return false;
    }
    else
    {
        return Account.HASH.test(hash);
    }
};

export const verificationCode: IValidatorFunction = verificationCode =>
{
    if (typeof verificationCode !== 'string')
    {
        return false;
    }
    else
    {
        return Account.VERIFICATION_CODE.test(verificationCode);
    }
};