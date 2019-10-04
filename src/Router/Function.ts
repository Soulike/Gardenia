import {PAGE_ID, PAGE_ID_TO_ROUTE} from './CONFIG';
import {PersonalCenter, Repository} from './Interface';

export function generatePersonalCenterRoute(parameter: PersonalCenter): string
{
    const {username} = parameter;
    return PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER].replace(':username', username);
}

export function generateRepositoryRoute(parameter: Repository)
{
    const {username, branch, objectType, path, repository} = parameter;
    let url = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY]
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