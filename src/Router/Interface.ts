import {ObjectType} from '../CONSTANT';

/**
 * 注意：这里所有的接口 key 的名字和可选性与 CONFIG/PAGE_ID_TO_ROUTE.ts 文件中的路径参数对应
 * ！！！如果要修改接口 key 务必同时修改 CONFIG/PAGE_ID_TO_ROUTE.ts 文件对应路径参数！！！
 *
 * 下面出现的所有 commitHash 均可被等价的名称替换，例如分支名和 tag 名字
 * */

export interface IPersonalCenter
{
    readonly username: string,
}

export interface IRepository
{
    readonly username: string,
    readonly repositoryName: string,
}

export interface IRepositoryCode extends IRepository
{
    readonly objectType?: ObjectType,
    readonly commitHash?: string,
    readonly path?: string,
}

export interface IRepositoryCreateIssue extends IRepository {}

export interface IRepositoryIssues extends IRepository {}

export interface IRepositoryIssue extends IRepository
{
    readonly no: string,
}

export interface IRepositoryPullRequests extends IRepository {}

export interface IRepositoryPullRequest extends IRepository
{
    readonly no: string,
}

export interface IRepositoryConflict extends IRepositoryPullRequest {}

export interface IRepositoryCompare extends IRepository
{
    sourceRepositoryUsername: string;
    sourceRepositoryName: string;
    sourceRepositoryBranch: string;
    targetRepositoryBranch: string;
}

export interface IRepositoryCommits extends IRepository
{
    readonly commitHash: string,
    readonly path?: string,
}

export interface IRepositoryCommit extends IRepository
{
    readonly commitHash: string,
}

export interface IRepositoryBranches extends IRepository {}

export interface IRepositoryTags extends IRepository {}

export interface IRepositorySettings extends IRepository {}

export interface IGroup
{
    readonly id: string,
}

export interface IGroupSettings extends IGroup {}

export interface IGroupSettingsRepositories extends IGroup {}