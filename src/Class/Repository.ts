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
        if (!Repository.validate({username, name, description, isPublic}))
        {
            throw new TypeError('Repository constructor parameter type is incorrect');
        }
        this.username = username;
        this.name = name;
        this.description = description;
        this.isPublic = isPublic;
    }

    public static validate(obj: Readonly<Record<keyof Repository, any>>): boolean
    {
        const {username, name, description, isPublic} = obj;
        return typeof username === 'string'
            && typeof name === 'string'
            && typeof description === 'string'
            && typeof isPublic === 'boolean';
    }

    public static from(obj: Readonly<Record<keyof Repository, any>>)
    {
        const {username, name, description, isPublic} = obj;
        return new Repository(username, name, description, isPublic);
    }
}