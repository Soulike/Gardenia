import {ObjectType} from '../../CONSTANT';

export interface RepositoryCode
{
    username: string,
    repository: string,
    objectType?: ObjectType,
    branch?: string,
    path?: string,
}