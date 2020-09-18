import {PAGE_ID, PAGE_ID_TO_ROUTE} from './CONFIG';
import {compile} from 'path-to-regexp';
import {
    IGroup,
    IGroupSettings,
    IGroupSettingsRepositories,
    IPersonalCenter,
    IRepositoryBranches,
    IRepositoryCode,
    IRepositoryCommit,
    IRepositoryCommits,
    IRepositoryCompare,
    IRepositoryConflict,
    IRepositoryCreateIssue,
    IRepositoryIssue,
    IRepositoryIssues,
    IRepositoryPullRequest,
    IRepositoryPullRequests,
    IRepositorySettings,
    IRepositoryTags,
    ISearch,
} from './Interface';

import querystring from 'querystring';

/**
 * @param parameterizedURL 带参数的 URL
 * @param parameters parameterizedURL 中参数构成的对象
 */
function toPath(parameterizedURL: string, parameters: any): string
{
    return compile(parameterizedURL, {
        validate: false,    // 允许暂时生成不合法的 URL
    })(parameters);
}

export function generatePersonalCenterRoute(parameter: IPersonalCenter): string
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER], parameter);
}

export function generateRepositoryCodeRoute(parameter: IRepositoryCode)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE], parameter);
}

export function generateRepositoryIssuesRoute(parameter: IRepositoryIssues)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES], parameter);
}

export function generateRepositoryCreateIssueRoute(parameter: IRepositoryCreateIssue)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CREATE_ISSUE], parameter);
}

export function generateRepositoryIssueRoute(parameter: IRepositoryIssue)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUE], parameter);
}

export function generateRepositoryPullRequestsRoute(parameter: IRepositoryPullRequests)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS], parameter);
}

export function generateRepositoryPullRequestRoute(parameter: IRepositoryPullRequest)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUEST], parameter);
}

export function generateRepositoryConflictRoute(parameter: IRepositoryConflict)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CONFLICT], parameter);
}

export function generateRepositoryCompareRoute(parameter: IRepositoryCompare)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMPARE], parameter);
}

export function generateRepositoryCommitsRoute(parameter: IRepositoryCommits)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMITS], parameter);
}

export function generateRepositoryCommitRoute(parameter: IRepositoryCommit)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMIT], parameter);
}

export function generateRepositoryBranchesRoute(parameter: IRepositoryBranches)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.BRANCHES], parameter);
}

export function generateRepositoryTagsRoute(parameter: IRepositoryTags)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.TAGS], parameter);
}

export function generateRepositorySettingsRoute(parameter: IRepositorySettings)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS], parameter);
}

export function generateRepositorySettingsOptionsRoute(parameter: IRepositorySettings)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.OPTIONS], parameter);
}

export function generateRepositorySettingsCollaboratorsRoute(parameter: IRepositorySettings)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS], parameter);
}

export function generateRepositorySettingsGroupsRoute(parameter: IRepositorySettings)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.GROUPS], parameter);
}

export function generateGroupRoute(parameter: IGroup)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.GROUP], parameter);
}

export function generateGroupRepositoriesRoute(parameter: IGroup)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.REPOSITORIES], parameter);
}

export function generateGroupMembersRoute(parameter: IGroup)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.MEMBERS], parameter);
}

export function generateGroupSettingsRoute(parameter: IGroup)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.SETTINGS], parameter);
}

export function generateGroupSettingsOptionsRoute(parameter: IGroupSettings)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.OPTIONS], parameter);
}

export function generateGroupSettingsRepositoriesRoute(parameter: IGroupSettingsRepositories)
{
    return toPath(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.REPOSITORIES], parameter);
}

export function generateSearchRoute(parameter: ISearch)
{
    return `${PAGE_ID_TO_ROUTE[PAGE_ID.SEARCH]}?${querystring.encode({...parameter})}`;
}