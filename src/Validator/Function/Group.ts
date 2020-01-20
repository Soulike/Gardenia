import {Group} from '../REGEXP';

export function name(name: string): boolean
{
    return Group.NAME.test(name);
}