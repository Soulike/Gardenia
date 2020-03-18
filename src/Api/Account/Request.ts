import axios, {AxiosResponse} from 'axios';
import {Account, Profile, ResponseBody} from '../../Class';
import {
    CHANGE_PASSWORD,
    CHECK_PASSWORD,
    CHECK_SESSION,
    LOGIN,
    LOGOUT,
    REGISTER,
    SEND_VERIFICATION_CODE_BY_USERNAME,
    SEND_VERIFICATION_CODE_TO_EMAIL,
} from './ROUTE';

export async function login(account: Readonly<Account>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(LOGIN, account);
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

export async function register(account: Readonly<Account>, profile: Readonly<Omit<Profile, 'username'>>, verificationCode: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(REGISTER, {
            account, profile, verificationCode,
        });
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

export async function sendVerificationCodeByUsername(profile: Readonly<Pick<Profile, 'username'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(SEND_VERIFICATION_CODE_BY_USERNAME, profile);
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

export async function sendVerificationCodeToEmail(profile: Readonly<Pick<Profile, 'email'>>): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(SEND_VERIFICATION_CODE_TO_EMAIL, profile);
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

export async function changePassword(account: Readonly<Account>, verificationCode: string): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(CHANGE_PASSWORD, {
            account, verificationCode,
        });
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

export async function checkSession(): Promise<Readonly<{ isValid: boolean }> | null>
{
    try
    {
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isValid: boolean }>> =
            await axios.get(CHECK_SESSION, {
                params: {_t: Date.now()},   // 不允许缓存
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

export async function checkPassword(account: Readonly<Pick<Account, 'hash'>>): Promise<Readonly<{ isCorrect: boolean }> | null>
{
    try
    {
        const {hash} = account;
        const {data: {isSuccessful, data}}: AxiosResponse<ResponseBody<{ isCorrect: boolean }>> =
            await axios.post(CHECK_PASSWORD, {hash});
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

export async function logout(): Promise<true | null>
{
    try
    {
        const {data: {isSuccessful}}: AxiosResponse<ResponseBody> = await axios.post(LOGOUT);
        return isSuccessful ? true : null;
    }
    catch (e)
    {
        return null;
    }
}