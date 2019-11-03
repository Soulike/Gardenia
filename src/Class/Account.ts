import crypto from 'crypto';

/**
 * @class
 * @description 账号，对应数据库中 accounts 表
 * */
export class Account
{
    public username: string;
    public hash: string;

    constructor(username: string, hash: string)
    {
        if (!Account.validate({username, hash}))
        {
            throw new TypeError('Account constructor parameter type is incorrect');
        }
        this.username = username;
        this.hash = hash;
    }

    public static calculateHash(username: string, password: string): string
    {
        const {sha256} = Account;
        return sha256(sha256(username) + sha256(password));
    }

    public static validate(obj: Readonly<Record<keyof Account, any>>): boolean
    {
        const {username, hash} = obj;
        return typeof username === 'string'
            && typeof hash === 'string';
    }

    public static from(obj: Readonly<Record<keyof Account, any>>)
    {
        const {username, hash} = obj;
        return new Account(username, hash);
    }

    private static sha256(text: string): string
    {
        const hash = crypto.createHash('sha256');
        hash.update(text);
        return hash.digest('hex');
    }
}