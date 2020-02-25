import {PAGE_ID, PAGE_ID_TO_ROUTE} from './CONFIG';
import {
    IGroup,
    IPersonalCenter,
    IRepositoryBranches,
    IRepositoryCode,
    IRepositoryCommit,
    IRepositoryCommits,
    IRepositoryCompare,
    IRepositoryIssues,
    IRepositoryPullRequests,
    IRepositorySettings,
} from './Interface';

export function generatePersonalCenterRoute(parameter: IPersonalCenter): string
{
    const {username} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER].replace(':username', username);
}

export function generateRepositoryCodeRoute(parameter: IRepositoryCode)
{
    const {username, branch, objectType, path, repository} = parameter;
    let url = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE]
        .replace(':username', username)
        .replace(':repository', repository);
    if (objectType !== undefined)
    {
        url = url.replace(':objectType?', objectType);
    }
    else
    {
        url = url.replace('/:objectType?', '');
    }
    if (branch !== undefined)
    {
        url = url.replace(':branch?', branch);
    }
    else
    {
        url = url.replace('/:branch?', '');
    }
    if (path !== undefined)
    {
        url = url.replace(':path*', path);
    }
    else
    {
        url = url.replace('/:path*', '');
    }
    return url;
}

export function generateRepositoryIssuesRoute(parameter: IRepositoryIssues)
{
    const {username, repository, number} = parameter;
    let url = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES]
        .replace(':username', username)
        .replace(':repository', repository);
    if (number !== undefined)
    {
        url = url.replace(':number?', number);
    }
    else
    {
        url = url.replace('/:number?', '');
    }
    return url;
}

export function generateRepositoryPullRequestsRoute(parameter: IRepositoryPullRequests)
{
    const {username, repository, number} = parameter;
    let url = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS]
        .replace(':username', username)
        .replace(':repository', repository);
    if (number !== undefined)
    {
        url = url.replace(':number?', number);
    }
    else
    {
        url = url.replace('/:number?', '');
    }
    return url;
}

export function generateRepositoryCompareRoute(parameter: IRepositoryCompare)
{
    const {
        username, repository,
        sourceRepositoryUsername, sourceRepositoryName,
        sourceRepositoryBranch, targetRepositoryBranch,
    } = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMPARE]
        .replace(':username', username)
        .replace(':repository', repository)
        .replace(':sourceRepositoryUsername', sourceRepositoryUsername)
        .replace(':sourceRepositoryName', sourceRepositoryName)
        .replace(':sourceRepositoryBranch', sourceRepositoryBranch)
        .replace(':targetRepositoryBranch', targetRepositoryBranch);
}

export function generateRepositoryCommitsRoute(parameter: IRepositoryCommits)
{
    const {username, repository, branch, path} = parameter;
    const replacedStringWithoutPath = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMITS]
        .replace(':username', username)
        .replace(':repository', repository)
        .replace(':branch', branch);
    return replacedStringWithoutPath.replace('/:path*',
        typeof path === 'string' ? `/${path}` : '');
}

export function generateRepositoryCommitRoute(parameter: IRepositoryCommit)
{
    const {username, repository, commitHash} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMIT]
        .replace(':username', username)
        .replace(':repository', repository)
        .replace(':commitHash', commitHash);
}

export function generateRepositoryBranchesRoute(parameter: IRepositoryBranches)
{
    const {username, repository} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.BRANCHES]
        .replace(':username', username)
        .replace(':repository', repository);
}

function generateRepositorySettingsRouteHelper(route: string, parameter: IRepositorySettings)
{
    const {username, repository} = parameter;
    return route
        .replace(':username', username)
        .replace(':repository', repository);
}

export function generateRepositorySettingsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS], parameter);
}

export function generateRepositorySettingsOptionsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRoute(parameter);
}

export function generateRepositorySettingsBranchesRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.BRANCHES], parameter);
}

export function generateRepositorySettingsCollaboratorsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS], parameter);
}

export function generateRepositorySettingsGroupsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.GROUPS], parameter);
}

export function generateGroupRouteHelper(route: string, parameter: IGroup)
{
    const {id} = parameter;
    return route.replace(':id', id);
}

export function generateGroupRoute(parameter: IGroup)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.GROUP], parameter);
}

export function generateGroupRepositoriesRoute(parameter: IGroup)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.REPOSITORIES], parameter);
}

export function generateGroupMembersRoute(parameter: IGroup)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.MEMBERS], parameter);
}

export function generateGroupSettingsRoute(parameter: IGroup)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.SETTINGS], parameter);
}

export function generateGroupSettingsOptionsRoute(parameter: IGroup)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.OPTIONS], parameter);
}