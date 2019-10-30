import {PAGE_ID} from './PAGE_ID';
import React from 'react';

const Login = React.lazy(() => import('../../Page/Login'));
const Register = React.lazy(() => import('../../Page/Register'));
const Index = React.lazy(() => import('../../Page/Index'));
const CreateRepository = React.lazy(() => import('../../Page/CreateRepository'));
const PersonalCenter = React.lazy(() => import('../../Page/PersonalCenter'));

const Code = React.lazy(() => import('../../Page/Repository/Code'));
const Options = React.lazy(() => import('../../Page/Repository/Settings/Options'));
const Groups = React.lazy(() => import('../../Page/Repository/Settings/Groups'));

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INDEX]: Index,
    [PAGE_ID.LOGIN]: Login,
    [PAGE_ID.REGISTER]: Register,
    [PAGE_ID.CREATE_REPOSITORY]: CreateRepository,
    [PAGE_ID.PERSONAL_CENTER]: PersonalCenter,

    [PAGE_ID.REPOSITORY.CODE]: Code,
    [PAGE_ID.REPOSITORY.ISSUES]: undefined,
    [PAGE_ID.REPOSITORY.PULL_REQUESTS]: undefined,

    [PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]: Options,
    [PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]: undefined,
    [PAGE_ID.REPOSITORY.SETTINGS.BRANCHES]: undefined,
    [PAGE_ID.REPOSITORY.SETTINGS.GROUPS]: Groups,

};