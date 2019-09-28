/**
 * @class
 * @description 账号，对应数据库中 accounts 表
 * */
export class Account
{
    public username: string;

    constructor(username: string, hash: string)
    {
        this.username = username;
        this.hash = hash;
    }

    private _hash: string = '';

    get hash(): string
    {
        return this._hash;
    }

    set hash(value: string)
    {
        if (value.length !== 64)
        {
            throw new Error('Property "hash" should be 64 characters long');
        }
        this._hash = value;
    }

    static from(obj: any)
    {
        const {username, hash} = obj;
        return new Account(username, hash);
    }
}