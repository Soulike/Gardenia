import {Account, Profile, ResponseBody} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {notification} from 'antd';
import {GET, SET, UPLOAD_AVATAR} from './ROUTE';
import {errorHandler} from '../Function';

export async function get(account?: Readonly<Pick<Account, 'username'>>): Promise<Readonly<Profile> | null>
{
    try
    {
        const {data: {isSuccessful, message, data}}: AxiosResponse<ResponseBody<Profile>> =
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
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function set(profile: Readonly<Partial<Omit<Profile, 'avatar' | 'username'>>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
            await axios.post(SET, profile);
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            notification.warn({message});
            return null;
        }
    }
    catch (e)
    {
        errorHandler(e);
        return null;
    }
}

export async function uploadAvatar(avatar: File): Promise<true | null>
{
    try
    {
        const formData = new FormData();
        formData.append('avatar', avatar);
        const {data: {isSuccessful, message}}: AxiosResponse<ResponseBody<void>> =
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
        errorHandler(e);
        return null;
    }
}