import {Account, Profile, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {
    GET,
    GET_BY_EMAIL,
    SEARCH,
    SEND_SET_EMAIL_VERIFICATION_CODE_TO_EMAIL,
    SET_EMAIL,
    SET_NICKNAME,
    UPLOAD_AVATAR,
} from './ROUTE';
import nProgress from 'nprogress';

export async function get(account?: Readonly<Pick<Account, 'username'>>): Promise<Profile | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Profile | null>> =
            await axios.get(GET, {
                params: {
                    json: JSON.stringify({account}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function getByEmail(email: Profile['email']): Promise<Profile | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Profile | null>> =
            await axios.get(GET_BY_EMAIL, {
                params: {
                    json: JSON.stringify({email}),
                },
            });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function setNickname(nickname: Profile['nickname']): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(SET_NICKNAME, {nickname});
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function setEmail(email: Profile['email'], verificationCode: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(SET_EMAIL, {email, verificationCode});
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function sendSetEmailVerificationCodeToEmail(email: Profile['email']): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(SEND_SET_EMAIL_VERIFICATION_CODE_TO_EMAIL, {email});
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
}

export async function uploadAvatar(avatar: File): Promise<true | null>
{
    nProgress.start();
    try
    {
        const formData = new FormData();
        formData.append('avatar', avatar);
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(UPLOAD_AVATAR, formData);
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
    finally
    {
        nProgress.done();
    }
}

export async function search(keyword: string, offset: number, limit: number): Promise<{ profiles: Profile[] } | null>
{
    nProgress.start();
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ profiles: Profile[] }>> =
            await axios.post(SEARCH, {keyword, offset, limit});
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            return null;
        }
    }
    catch (e)
    {
        return null;
    }
    finally
    {
        nProgress.done();
    }
}