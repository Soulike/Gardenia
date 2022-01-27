import CryptoJS from 'crypto-js';

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
        return CryptoJS.SHA256(
            CryptoJS.SHA256(username).toString(CryptoJS.enc.Hex) +
            CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex))
            .toString(CryptoJS.enc.Hex);
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
}