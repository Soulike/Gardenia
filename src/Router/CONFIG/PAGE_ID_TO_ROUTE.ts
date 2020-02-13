import {PAGE_ID} from './PAGE_ID';

export const PAGE_ID_TO_ROUTE = Object.freeze({
    [PAGE_ID.NOT_FOUND]: '/404',
    [PAGE_ID.INDEX]: '/',
    [PAGE_ID.LOGIN]: '/login',
    [PAGE_ID.REGISTER]: '/register',
    [PAGE_ID.CREATE_REPOSITORY]: '/createRepository',
    [PAGE_ID.CREATE_GROUP]: '/createGroup',
    [PAGE_ID.ADD_COLLABORATION]: '/addCollaboration',
    [PAGE_ID.PERSONAL_CENTER]: '/personalCenter/:username',

    [PAGE_ID.REPOSITORY.REPOSITORY]: '/repository/:username/:repository',
    [PAGE_ID.REPOSITORY.ISSUES]: '/repository/:username/:repository/issues/:number?',
    [PAGE_ID.REPOSITORY.PULL_REQUESTS]: '/repository/:username/:repository/pulls/:number?',
    [PAGE_ID.REPOSITORY.CODE]: '/repository/:username/:repository/:objectType?/:branch?/:path*',
    [PAGE_ID.REPOSITORY.COMMITS]: '/repository/:username/:repository/:branch/commits',
    [PAGE_ID.REPOSITORY.COMMIT]: '/repository/:username/:repository/commit/:commitHash',

    [PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]: '/repository/:username/:repository/settings',
    [PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]: '/repository/:username/:repository/settings',
    [PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]: '/repository/:username/:repository/settings/collaborators',
    [PAGE_ID.REPOSITORY.SETTINGS.BRANCHES]: '/repository/:username/:repository/settings/branches',
    [PAGE_ID.REPOSITORY.SETTINGS.GROUPS]: '/repository/:username/:repository/settings/groups',

    [PAGE_ID.GROUP.GROUP]: '/group/:id',
    [PAGE_ID.GROUP.REPOSITORIES]: '/group/:id/repositories',
    [PAGE_ID.GROUP.MEMBERS]: '/group/:id/members',

    [PAGE_ID.GROUP.SETTINGS.SETTINGS]: '/group/:id/settings',
    [PAGE_ID.GROUP.SETTINGS.OPTIONS]: '/group/:id/settings',

    [PAGE_ID.SETTING.SETTING]: '/setting',
    [PAGE_ID.SETTING.PROFILE]: '/setting/profile',
    [PAGE_ID.SETTING.AVATAR]: '/setting/avatar',
});