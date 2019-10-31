import {PAGE_ID} from './PAGE_ID';
import React from 'react';

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INDEX]: React.lazy(() => import('../../Page/Index')),
    [PAGE_ID.LOGIN]: React.lazy(() => import('../../Page/Login')),
    [PAGE_ID.REGISTER]: React.lazy(() => import('../../Page/Register')),
    [PAGE_ID.CREATE_REPOSITORY]: React.lazy(() => import('../../Page/CreateRepository')),
    [PAGE_ID.CREATE_GROUP]: React.lazy(() => import('../../Page/CreateGroup')),

    [PAGE_ID.PERSONAL_CENTER]: React.lazy(() => import('../../Page/PersonalCenter')),

    [PAGE_ID.REPOSITORY.CODE]: React.lazy(() => import('../../Page/Repository/Component/Code')),
    [PAGE_ID.REPOSITORY.ISSUES]: undefined,
    [PAGE_ID.REPOSITORY.PULL_REQUESTS]: undefined,

    [PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]: React.lazy(() => import('../../Page/Repository/Component/Settings/Component/Options')),
    [PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]: undefined,
    [PAGE_ID.REPOSITORY.SETTINGS.BRANCHES]: undefined,
    [PAGE_ID.REPOSITORY.SETTINGS.GROUPS]: React.lazy(() => import('../../Page/Repository/Component/Settings/Component/Groups')),

    [PAGE_ID.GROUPS.GROUPS]: undefined,
    [PAGE_ID.GROUPS.REPOSITORIES]: undefined,
    [PAGE_ID.GROUPS.MEMBERS]: undefined,

    [PAGE_ID.GROUPS.SETTINGS.SETTINGS]: undefined,
    [PAGE_ID.GROUPS.SETTINGS.OPTIONS]: undefined,
};