export class Conflict
{
    public readonly filePath: string;
    public readonly isBinary: boolean;
    public readonly content: string;

    constructor(filePath: string, isBinary: boolean, content: string)
    {
        this.filePath = filePath;
        this.isBinary = isBinary;
        this.content = content;
    }

    public static validate(conflict: Readonly<Record<keyof Conflict, any>>): boolean
    {
        const {filePath, isBinary, content} = conflict;
        return typeof filePath === 'string'
            && typeof isBinary === 'boolean'
            && typeof content === 'string';
    }

    public static from(conflict: Readonly<Record<keyof Conflict, any>>): Conflict
    {
        const {filePath, isBinary, content} = conflict;
        if (!Conflict.validate({filePath, isBinary, content}))
        {
            throw new TypeError();
        }
        return new Conflict(filePath, isBinary, content);
    }
}