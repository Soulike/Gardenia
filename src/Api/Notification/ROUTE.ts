import {prefix} from '../Function';

function notificationPrefix(url: string): string
{
    return prefix(`/notification${url}`);
}

export const GET = notificationPrefix('/get');
export const GET_COUNT = notificationPrefix('/getCount');
export const SET_CONFIRMED = notificationPrefix('/setConfirmed');