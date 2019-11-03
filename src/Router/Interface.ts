import {ObjectType} from '../CONSTANT';

export interface IPersonalCenter
{
    readonly username: string,
}

export interface IRepositoryCode
{
    readonly username: string,
    readonly repository: string,
    readonly objectType?: ObjectType,
    readonly branch?: string,
    readonly path?: string,
}

export interface IRepositoryIssues
{
    readonly username: string,
    readonly repository: string,
    readonly number?: string,
}

export interface IRepositoryPullRequests extends IRepositoryIssues {}

export interface IRepositorySettings
{
    readonly username: string,
    readonly repository: string,
}

export interface IGroup
{
    readonly id: string,
}