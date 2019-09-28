import crypto from 'crypto';

const hash = crypto.createHash('sha256');

export function sha256(text: string): string
{
    hash.update(text);
    return hash.digest('hex');
}