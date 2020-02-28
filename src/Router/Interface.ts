import {ObjectType} from '../CONSTANT';

export interface IPersonalCenter
{
    readonly username: string,
}

export interface IRepository
{
    readonly username: string,
    readonly repository: string,
}

export interface IRepositoryCode extends IRepository
{
    readonly objectType?: ObjectType,
    readonly branch?: string,
    readonly path?: string,
}

export interface IRepositoryIssues extends IRepository {}

export interface IRepositoryIssue extends IRepository
{
    readonly id: string,
}

export interface IRepositoryPullRequests extends IRepository {}

export interface IRepositoryPullRequest extends IRepository
{
    readonly id: string,
}

export interface IRepositoryCompare extends IRepository
{
    sourceRepositoryUsername: string;
    sourceRepositoryName: string;
    sourceRepositoryBranch: string;
    targetRepositoryBranch: string;
}

export interface IRepositoryCommits extends IRepository
{
    readonly branch: string,
    readonly path?: string,
}

export interface IRepositoryCommit extends IRepository
{
    readonly commitHash: string,
}

export interface IRepositoryBranches extends IRepository {}

export interface IRepositorySettings extends IRepository {}

export interface IGroup
{
    readonly id: string,
}