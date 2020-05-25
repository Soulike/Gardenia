import {Account, Profile, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {GET, GET_BY_EMAIL, SEND_SET_EMAIL_VERIFICATION_CODE_TO_EMAIL, SET, SET_EMAIL, UPLOAD_AVATAR} from './ROUTE';
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

export async function set(profile: Readonly<Partial<Omit<Profile, 'avatar' | 'username'>>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> =
            await axios.post(SET, profile);
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