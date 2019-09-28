import validator from 'validator';

/**
 * @class
 * @description 账号资料，对应数据库 profiles 表
 * */
export class Profile
{
    public username: string;
    public nickname: string;
    public avatar: string;

    constructor(username: string, nickname: string, email: string, avatar: string)
    {
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.avatar = avatar;
    }

    private _email: string = '';

    get email(): string
    {
        return this._email;
    }

    set email(value: string)
    {
        if (!validator.isEmail(value))
        {
            throw new Error('Property "email" of a profile should be an email address');
        }
        this._email = value;
    }

    static from(obj: any)
    {
        const {username, nickname, email, avatar} = obj;
        return new Profile(username, nickname, email, avatar);
    }
}