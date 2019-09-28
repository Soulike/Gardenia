/**
 * @class
 * @description 仓库基本信息
 * */
export class Repository
{
    public username: string;
    public name: string;
    public description: string;
    public isPublic: boolean;

    /**
     * @constructor
     * @param username - 仓库所有者的名字
     * @param name - 仓库的名字
     * @param description - 仓库的描述（可选）
     * @param isPublic - 仓库是否公开
     * */
    constructor(username: string, name: string, description: string, isPublic: boolean)
    {
        this.username = username;
        this.name = name;
        this.description = description;
        this.isPublic = isPublic;
    }

    static from(obj: any)
    {
        const {username, name, description, isPublic} = obj;
        return new Repository(username, name, description, isPublic);
    }
}