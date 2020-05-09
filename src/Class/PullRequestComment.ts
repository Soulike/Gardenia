export class PullRequestComment
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

    public static validate(pullRequestComment: Readonly<Record<keyof PullRequestComment, any>>): boolean
    {
        const {id, username, belongsTo, content, creationTime, modificationTime} = pullRequestComment;
        return (Number.isInteger(id) || id === undefined)
            && typeof username === 'string'
            && Number.isInteger(belongsTo)
            && typeof content === 'string'
            && Number.isInteger(creationTime)
            && Number.isInteger(modificationTime);
    }

    public static from(pullRequestComment: Readonly<Record<keyof PullRequestComment, any>>): PullRequestComment
    {
        if (!PullRequestComment.validate(pullRequestComment))
        {
            throw new TypeError();
        }
        const {id, username, belongsTo, content, creationTime, modificationTime} = pullRequestComment;
        return new PullRequestComment(id, username, belongsTo, content, creationTime, modificationTime);
    }
}