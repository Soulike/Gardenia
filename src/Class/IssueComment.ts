export class IssueComment
{
    public readonly id: number | undefined;
    public readonly username: string;
    public readonly belongsTo: number;
    public readonly content: string;
    public readonly creationTime: number;
    public readonly modificationTime: number;

    constructor(id: number | undefined, username: string, belongsTo: number, content: string, creationTime: number, modificationTime: number)
    {
        this.id = id;
        this.username = username;
        this.belongsTo = belongsTo;
        this.content = content;
        this.creationTime = creationTime;
        this.modificationTime = modificationTime;
    }

    public static validate(issueComment: Readonly<Record<keyof IssueComment, any>>): boolean
    {
        const {id, username, belongsTo, content, creationTime, modificationTime} = issueComment;
        return (Number.isInteger(id) || id === undefined)
            && typeof username === 'string'
            && Number.isInteger(belongsTo)
            && typeof content === 'string'
            && Number.isInteger(creationTime)
            && Number.isInteger(modificationTime);
    }

    public static from(issueComment: Readonly<Record<keyof IssueComment, any>>): IssueComment
    {
        if (!IssueComment.validate(issueComment))
        {
            throw new TypeError();
        }
        const {id, username, belongsTo, content, creationTime, modificationTime} = issueComment;
        return new IssueComment(id, username, belongsTo, content, creationTime, modificationTime);
    }
}