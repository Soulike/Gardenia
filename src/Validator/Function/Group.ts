import {Group} from '../REGEXP';
import {IValidatorFunction} from '../Interface';

export const name: IValidatorFunction = name =>
{
    if (typeof name !== 'string')
    {
        return false;
    }
    else
    {
        return Group.NAME.test(name);
    }
};