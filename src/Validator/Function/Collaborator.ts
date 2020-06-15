import {Collaborator} from '../REGEXP';
import {IValidatorFunction} from '../Interface';

export const code: IValidatorFunction = code =>
{
    if (typeof code !== 'string')
    {
        return false;
    }
    else
    {
        return Collaborator.CODE.test(code);
    }
};