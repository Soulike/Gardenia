import {Account, Profile, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {notification} from 'antd';
import {GET, GET_BY_EMAIL, SET, UPLOAD_AVATAR} from './ROUTE';
import nProgress from 'nprogress';

export async function get(account?: Readonly<Pick<Account, 'username'>>): Promise<Readonly<Profile> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<Profile>> =
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

export async function uploadAvatar(avatar: File): Promise<true | null>
{
    nProgress.start();
    try
    {
        const formData = new FormData();
        formData.append('avatar', avatar);
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody> =
            await axios.post(UPLOAD_AVATAR, formData);
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            notification.error({message});
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