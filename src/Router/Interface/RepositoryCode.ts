import {ObjectType} from '../../CONSTANT';

export interface IRepositoryCode
{
    username: string,
    repository: string,
    objectType?: ObjectType,
    branch?: string,
    path?: string,
}