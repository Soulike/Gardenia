import {Commit} from './Commit';

export class Branch
{
    public readonly name: string;
    public readonly lastCommit: Commit;
    public readonly isDefault: boolean;

    constructor(name: string, lastCommit: Readonly<Commit>, isDefault: boolean)
    {
        this.name = name;
        this.lastCommit = Commit.from(lastCommit);
        this.isDefault = isDefault;
    }

    public static validate(branch: Readonly<Record<keyof Branch, any>>): boolean
    {
        const {name, lastCommit, isDefault} = branch;
        return typeof name === 'string'
            && Commit.validate(lastCommit)
            && typeof isDefault === 'boolean';
    }

    public static from(branch: Readonly<Record<keyof Branch, any>>): Branch
    {
        if (!Branch.validate(branch))
        {
            throw new TypeError();
        }
        const {name, lastCommit, isDefault} = branch;
        return new Branch(name, lastCommit, isDefault);
    }
}