import {PAGE_ID} from './PAGE_ID';

export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.INDEX]: '/',
    [PAGE_ID.LOGIN]: '/login',
    [PAGE_ID.REGISTER]: '/register',
    [PAGE_ID.CREATE_REPOSITORY]: '/createRepository',
    [PAGE_ID.PERSONAL_CENTER]: '/:username',
    [PAGE_ID.REPOSITORY_ISSUES]: '/:username/:repository/issues/:number?',
    [PAGE_ID.REPOSITORY_PULL_REQUESTS]: '/:username/:repository/pulls/:number?',
    [PAGE_ID.REPOSITORY_SETTINGS]: '/:username/:repository/settings',
    [PAGE_ID.REPOSITORY]: '/:username/:repository/:objectType?/:branch?/:path*',
};