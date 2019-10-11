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
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.avatar = avatar;
    }

    static from(obj: any)
    {
        const {username, nickname, email, avatar} = obj;
        return new Profile(username, nickname, email, avatar);
    }
}