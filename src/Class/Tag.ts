import {Commit} from './Commit';

export class Tag
{
    public readonly name: string;
    public readonly lastCommit: Commit;

    constructor(name: string, lastCommit: Readonly<Commit>)
    {
        this.name = name;
        this.lastCommit = Commit.from(lastCommit);
    }

    public static validate(tag: Readonly<Record<keyof Tag, any>>): boolean
    {
        const {name, lastCommit} = tag;
        return typeof name === 'string'
            && Commit.validate(lastCommit);
    }

    public static from(tag: Readonly<Record<keyof Tag, any>>): Tag
    {
        if (!Tag.validate(tag))
        {
            throw new TypeError();
        }
        const {name, lastCommit} = tag;
        return new Tag(name, lastCommit);
    }
}