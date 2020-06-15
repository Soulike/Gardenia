import {Profile} from '../REGEXP';
import {IValidatorFunction} from '../Interface';

export const nickname: IValidatorFunction = nickname =>
{
    if (typeof nickname !== 'string')
    {
        return false;
    }
    else
    {
        return Profile.NICKNAME.test(nickname);
    }
};

export const email: IValidatorFunction = email =>
{
    if (typeof email !== 'string')
    {
        return false;
    }
    else
    {
        return Profile.EMAIL.test(email);
    }
};