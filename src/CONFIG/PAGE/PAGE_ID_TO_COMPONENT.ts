import {PAGE_ID} from './PAGE_ID';
import React from 'react';

const Login = React.lazy(() => import('../../Page/Login'));
const Register = React.lazy(() => import('../../Page/Register'));
const Index = React.lazy(() => import('../../Page/Index'));
const CreateRepository = React.lazy(() => import('../../Page/CreateRepository'));
const PersonalCenter = React.lazy(() => import('../../Page/PersonalCenter'));
const Repository = React.lazy(() => import('../../Page/Repository'));

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INDEX]: Index,
    [PAGE_ID.LOGIN]: Login,
    [PAGE_ID.REGISTER]: Register,
    [PAGE_ID.CREATE_REPOSITORY]: CreateRepository,
    [PAGE_ID.PERSONAL_CENTER]: PersonalCenter,
    [PAGE_ID.REPOSITORY]: Repository,
};