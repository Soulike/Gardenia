import {PAGE_ID} from './PAGE_ID';

export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.INDEX]: '/',
    [PAGE_ID.LOGIN]: '/login',
    [PAGE_ID.REGISTER]: '/register',
    [PAGE_ID.CREATE_REPOSITORY]: '/createRepository',
    [PAGE_ID.CREATE_GROUP]: '/createGroup',
    [PAGE_ID.PERSONAL_CENTER]: '/:username/personalCenter',

    [PAGE_ID.REPOSITORY.REPOSITORY]: '/:username/repository/:repository',
    [PAGE_ID.REPOSITORY.ISSUES]: '/:username/repository/:repository/issues/:number?',
    [PAGE_ID.REPOSITORY.PULL_REQUESTS]: '/:username/repository/:repository/pulls/:number?',
    [PAGE_ID.REPOSITORY.CODE]: '/:username/repository/:repository/:objectType?/:branch?/:path*',

    [PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]: '/:username/repository/:repository/settings',
    [PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]: '/:username/repository/:repository/settings',
    [PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]: '/:username/repository/:repository/settings/collaborators',
    [PAGE_ID.REPOSITORY.SETTINGS.BRANCHES]: '/:username/repository/:repository/settings/branches',
    [PAGE_ID.REPOSITORY.SETTINGS.GROUPS]: '/:username/repository/:repository/settings/groups',
};