import {PAGE_ID} from './PAGE_ID';

export const PAGE_ID_TO_ROUTE = Object.freeze({
    [PAGE_ID.NOT_FOUND]: '/404',
    [PAGE_ID.REPOSITORY_REDIRECT]: '/:username/:repositoryName.git',
    [PAGE_ID.INDEX]: '/',
    [PAGE_ID.LOGIN]: '/login',
    [PAGE_ID.REGISTER]: '/register',
    [PAGE_ID.CHANGE_PASSWORD]: '/changePassword',
    [PAGE_ID.CREATE_REPOSITORY]: '/createRepository',
    [PAGE_ID.CREATE_GROUP]: '/createGroup',
    [PAGE_ID.ADD_COLLABORATION]: '/addCollaboration',
    [PAGE_ID.PERSONAL_CENTER]: '/personalCenter/:username',
    [PAGE_ID.NOTIFICATIONS]: '/notifications',
    [PAGE_ID.SEARCH]: '/search',

    [PAGE_ID.REPOSITORY.REPOSITORY]: '/repository/:username/:repositoryName',
    [PAGE_ID.REPOSITORY.ISSUES]: '/repository/:username/:repositoryName/issues',
    [PAGE_ID.REPOSITORY.ISSUE]: '/repository/:username/:repositoryName/issue/:no',
    [PAGE_ID.REPOSITORY.CREATE_ISSUE]: '/repository/:username/:repositoryName/createIssue',
    [PAGE_ID.REPOSITORY.PULL_REQUESTS]: '/repository/:username/:repositoryName/pulls',
    [PAGE_ID.REPOSITORY.PULL_REQUEST]: '/repository/:username/:repositoryName/pull/:no',
    [PAGE_ID.REPOSITORY.CONFLICT]: '/repository/:username/:repositoryName/conflict/:no',
    [PAGE_ID.REPOSITORY.COMPARE]: '/repository/:username/:repositoryName/compare/:targetRepositoryBranch/:sourceRepositoryUsername/:sourceRepositoryName/:sourceRepositoryBranch',
    [PAGE_ID.REPOSITORY.CODE]: '/repository/:username/:repositoryName/:objectType?/:commitHash?/:path*',
    [PAGE_ID.REPOSITORY.COMMITS]: '/repository/:username/:repositoryName/:commitHash/commits/:path*',
    [PAGE_ID.REPOSITORY.COMMIT]: '/repository/:username/:repositoryName/commit/:commitHash',
    [PAGE_ID.REPOSITORY.BRANCHES]: '/repository/:username/:repositoryName/branches',
    [PAGE_ID.REPOSITORY.TAGS]: '/repository/:username/:repositoryName/tags',

    [PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]: '/repository/:username/:repositoryName/settings',
    [PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]: '/repository/:username/:repositoryName/settings',
    [PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]: '/repository/:username/:repositoryName/settings/collaborators',
    [PAGE_ID.REPOSITORY.SETTINGS.GROUPS]: '/repository/:username/:repositoryName/settings/groups',

    [PAGE_ID.GROUP.GROUP]: '/group/:id',
    [PAGE_ID.GROUP.REPOSITORIES]: '/group/:id/repositories',
    [PAGE_ID.GROUP.MEMBERS]: '/group/:id/members',

    [PAGE_ID.GROUP.SETTINGS.SETTINGS]: '/group/:id/settings',
    [PAGE_ID.GROUP.SETTINGS.OPTIONS]: '/group/:id/settings',
    [PAGE_ID.GROUP.SETTINGS.REPOSITORIES]: '/group/:id/settings/repositories',

    [PAGE_ID.SETTING.SETTING]: '/setting',
    [PAGE_ID.SETTING.PROFILE]: '/setting/profile',
    [PAGE_ID.SETTING.AVATAR]: '/setting/avatar',
});