/**
 * @class
 * @description 账号资料，对应数据库 profiles 表
 * */
export class Profile
{
    public username: string;
    public nickname: string;
    public avatar: string;
    public email: string;

    constructor(username: string, nickname: string, email: string, avatar: string)
    {
        if (!Profile.validate({username, nickname, email, avatar}))
        {
            throw new TypeError('Profile constructor parameter type is incorrect');
        }
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.avatar = avatar;
    }

    public static validate(obj: Readonly<Record<keyof Profile, any>>): boolean
    {
        const {username, nickname, email, avatar} = obj;
        return typeof username === 'string'
            && typeof nickname === 'string'
            && typeof email === 'string'
            && typeof avatar === 'string';
    }

    public static from(obj: Readonly<Record<keyof Profile, any>>)
    {
        const {username, nickname, email, avatar} = obj;
        return new Profile(username, nickname, email, avatar);
    }
}