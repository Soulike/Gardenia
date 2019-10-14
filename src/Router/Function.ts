import {PAGE_ID, PAGE_ID_TO_ROUTE} from './CONFIG';
import {
    PersonalCenter,
    RepositoryCode,
    RepositoryIssues,
    RepositoryPullRequests,
    RepositorySettings,
} from './Interface';

export function generatePersonalCenterRoute(parameter: PersonalCenter): string
{
    const {username} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER].replace(':username', username);
}

export function generateRepositoryRoute(parameter: RepositoryCode)
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

export function generateRepositoryIssuesRoute(parameter: RepositoryIssues)
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

export function generateRepositoryPullRequestsRoute(parameter: RepositoryPullRequests)
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

function generateRepositorySettingsRouteHelper(route: string, parameter: RepositorySettings)
{
    const {username, repository} = parameter;
    return route
        .replace(':username', username)
        .replace(':repository', repository);
}

export function generateRepositorySettingsRoute(parameter: RepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS], parameter);
}

export function generateRepositorySettingsOptionsRoute(parameter: RepositorySettings)
{
    return generateRepositorySettingsRoute(parameter);
}

export function generateRepositoryBranchesRoute(parameter: RepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.BRANCHES], parameter);
}

export function generateRepositoryCollaboratorsRoute(parameter: RepositorySettings)
{
    return generateRepositorySettingsRouteHelper(PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS], parameter);
}