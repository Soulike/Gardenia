import {prefix} from '../Function';

function profilePrefix(url: string): string
{
    return prefix(`/profile${url}`);
}

export const GET = profilePrefix('/get');
export const GET_BY_EMAIL = profilePrefix('/getByEmail');
export const SET_NICKNAME = profilePrefix('/setNickname');
export const SET_EMAIL = profilePrefix('/setEmail');
export const SEND_SET_EMAIL_VERIFICATION_CODE_TO_EMAIL = profilePrefix('/sendSetEmailVerificationCodeToEmail');
export const UPLOAD_AVATAR = profilePrefix('/uploadAvatar');
export const SEARCH = profilePrefix('/search');