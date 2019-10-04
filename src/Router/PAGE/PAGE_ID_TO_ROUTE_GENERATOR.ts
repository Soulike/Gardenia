import {PAGE_ID} from './PAGE_ID';
import {PAGE_ID_TO_ROUTE} from './PAGE_ID_TO_ROUTE';
import {ObjectType} from '../../CONSTANT';

export const PAGE_ID_TO_ROUTE_GENERATOR: { [key: string]: Function } = {
    [PAGE_ID.INDEX]: () => '/',
    [PAGE_ID.LOGIN]: () => '/login',
    [PAGE_ID.REGISTER]: () => '/register',
    [PAGE_ID.CREATE_REPOSITORY]: () => '/createRepository',
    [PAGE_ID.PERSONAL_CENTER]: (username: string) => PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER].replace(':username', username),
    [PAGE_ID.REPOSITORY]: (username: string, repository: string, objectType?: ObjectType, branch?: string, path?: string) =>
    {
        let url = PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY]
            .replace(':username', username)
            .replace(':repository', repository);
        if (objectType !== undefined)
        {
            url = url.replace(':objectType?', objectType.toLowerCase());
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
    },
};