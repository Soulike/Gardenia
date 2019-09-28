import {PAGE_ID} from './PAGE_ID';
import Login from '../../Page/Login';
import Register from '../../Page/Register';

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INDEX]: undefined,
    [PAGE_ID.LOGIN]: Login,
    [PAGE_ID.REGISTER]: Register,
    [PAGE_ID.CREATE_REPOSITORY]: undefined,
    [PAGE_ID.PERSONAL_CENTER]: undefined,
    [PAGE_ID.REPOSITORY]: undefined,
};