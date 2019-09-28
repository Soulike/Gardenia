import {prefix} from '../Function';

function profilePrefix(url: string): string
{
    return prefix(`/profile${url}`);
}

export const GET = profilePrefix('/get');