import {PAGE_ID, PAGE_ID_TO_ROUTE} from './CONFIG';
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
} from './Interface';

export function generatePersonalCenterRoute(parameter: IPersonalCenter): string
{
    const {username} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER].replace(':username', username);
}

export function generateRepositoryCodeRoute(parameter: IRepositoryCode)
{
    const {username, commitHash, objectType, path, repositoryName} = parameter;
    let url = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
    if (objectType !== undefined)
    {
        url = url.replace(':objectType?', objectType);
    }
    else
    {
        url = url.replace('/:objectType?', '');
    }
    if (commitHash !== undefined)
    {
        url = url.replace(':commitHash?', commitHash);
    }
    else
    {
        url = url.replace('/:commitHash?', '');
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
    const {username, repositoryName} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
}

export function generateRepositoryCreateIssueRoute(parameter: IRepositoryCreateIssue)
{
    const {username, repositoryName} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CREATE_ISSUE]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
}

export function generateRepositoryIssueRoute(parameter: IRepositoryIssue)
{
    const {username, repositoryName, no} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUE]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName)
        .replace(':no', no);
}

export function generateRepositoryPullRequestsRoute(parameter: IRepositoryPullRequests)
{
    const {username, repositoryName} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
}

export function generateRepositoryPullRequestRoute(parameter: IRepositoryPullRequest)
{
    const {username, repositoryName, no} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUEST]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName)
        .replace(':no', no);
}

export function generateRepositoryConflictRoute(parameter: IRepositoryConflict)
{
    const {username, repositoryName, no} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CONFLICT]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName)
        .replace(':no', no);
}

export function generateRepositoryCompareRoute(parameter: IRepositoryCompare)
{
    const {
        username, repositoryName,
        sourceRepositoryUsername, sourceRepositoryName,
        sourceRepositoryBranch, targetRepositoryBranch,
    } = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMPARE]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName)
        .replace(':sourceRepositoryUsername', sourceRepositoryUsername)
        .replace(':sourceRepositoryName', sourceRepositoryName)
        .replace(':sourceRepositoryBranch', sourceRepositoryBranch)
        .replace(':targetRepositoryBranch', targetRepositoryBranch);
}

export function generateRepositoryCommitsRoute(parameter: IRepositoryCommits)
{
    const {username, repositoryName, branch, path} = parameter;
    const replacedStringWithoutPath = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMITS]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName)
        .replace(':commitHash', branch);
    return replacedStringWithoutPath.replace('/:path*',
        typeof path === 'string' ? `/${path}` : '');
}

export function generateRepositoryCommitRoute(parameter: IRepositoryCommit)
{
    const {username, repositoryName, commitHash} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMIT]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName)
        .replace(':commitHash', commitHash);
}

export function generateRepositoryBranchesRoute(parameter: IRepositoryBranches)
{
    const {username, repositoryName} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.BRANCHES]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
}

export function generateRepositoryTagsRoute(parameter: IRepositoryTags)
{
    const {username, repositoryName} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.TAGS]
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
}

function generateRepositorySettingsRouteHelper(route: string, parameter: IRepositorySettings)
{
    const {username, repositoryName} = parameter;
    return route
        .replace(':username', username)
        .replace(':repositoryName', repositoryName);
}

export function generateRepositorySettingsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS], parameter);
}

export function generateRepositorySettingsOptionsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRoute(parameter);
}

export function generateRepositorySettingsCollaboratorsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS], parameter);
}

export function generateRepositorySettingsGroupsRoute(parameter: IRepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.GROUPS], parameter);
}

export function generateGroupRouteHelper<T extends IGroup>(route: string, parameter: T)
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

export function generateGroupSettingsOptionsRoute(parameter: IGroupSettings)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.OPTIONS], parameter);
}

export function generateGroupSettingsRepositoriesRoute(parameter: IGroupSettingsRepositories)
{
    return generateGroupRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.REPOSITORIES], parameter);
}