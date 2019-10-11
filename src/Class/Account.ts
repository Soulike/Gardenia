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
        this.username = username;
        this.hash = hash;
    }

    static from(obj: any)
    {
        const {username, hash} = obj;
        return new Account(username, hash);
    }
}