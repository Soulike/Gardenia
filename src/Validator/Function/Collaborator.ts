import {Collaborator} from '../REGEXP';

export function code(code: string): boolean
{
    return Collaborator.CODE.test(code);
}