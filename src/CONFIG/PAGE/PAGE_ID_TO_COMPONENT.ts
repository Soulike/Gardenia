import {PAGE_ID} from './PAGE_ID';
import React from 'react';

const Login = React.lazy(() => import('../../Page/Login'));
const Register = React.lazy(() => import('../../Page/Register'));

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INDEX]: undefined,
    [PAGE_ID.LOGIN]: Login,
    [PAGE_ID.REGISTER]: Register,
    [PAGE_ID.CREATE_REPOSITORY]: undefined,
    [PAGE_ID.PERSONAL_CENTER]: undefined,
    [PAGE_ID.REPOSITORY]: undefined,
};