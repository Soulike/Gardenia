import {Commit} from './Commit';

export class Tag
{
    public readonly name: string;
    public readonly annotation: Annotation;
    public readonly lastCommit: Commit;

    constructor(name: string, annotation: Annotation, lastCommit: Readonly<Commit>)
    {
        this.name = name;
        this.annotation = annotation;
        this.lastCommit = Commit.from(lastCommit);
    }

    public static validate(tag: Readonly<Record<keyof Tag, any>>): boolean
    {
        const {name, annotation: {subject, body}, lastCommit} = tag;
        return typeof name === 'string'
            && typeof subject === 'string' && typeof body === 'string'
            && Commit.validate(lastCommit);
    }

    public static from(tag: Readonly<Record<keyof Tag, any>>): Tag
    {
        if (!Tag.validate(tag))
        {
            throw new TypeError();
        }
        const {name, annotation, lastCommit} = tag;
        return new Tag(name, annotation, lastCommit);
    }
}

interface Annotation
{
    subject: string,
    body: string
}