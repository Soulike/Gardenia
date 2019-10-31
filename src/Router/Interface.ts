import {ObjectType} from '../CONSTANT';

export interface IPersonalCenter
{
    username: string,
}

export interface IRepositoryCode
{
    username: string,
    repository: string,
    objectType?: ObjectType,
    branch?: string,
    path?: string,
}

export interface IRepositoryIssues
{
    username: string,
    repository: string,
    number?: string,
}

export interface IRepositoryPullRequests extends IRepositoryIssues {}

export interface IRepositorySettings
{
    username: string,
    repository: string,
}

export interface IGroup
{
    username: string,
    id: string,
}