import {Repository} from '../REGEXP';

export function name(name: string): boolean
{
    return Repository.NAME.test(name);
}