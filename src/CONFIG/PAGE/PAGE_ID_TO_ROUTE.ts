import {PAGE_ID} from './PAGE_ID';

export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.INDEX]: '/',
    [PAGE_ID.CREATE_REPOSITORY]: '/createRepository',
    [PAGE_ID.PERSONAL_CENTER]: '/:username',
    [PAGE_ID.REPOSITORY]: '/:username/:repository/:path*',
};