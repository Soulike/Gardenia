import {ObjectType} from '../../CONSTANT';

export interface Repository
{
    username: string,
    repository: string,
    objectType?: ObjectType,
    branch?: string,
    path?: string,
}