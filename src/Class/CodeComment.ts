export class CodeComment
{
    public readonly id: number;
    public readonly repositoryUsername: string;
    public readonly repositoryName: string;
    public readonly filePath: string;
    public readonly columnNumber: number;
    public readonly content: string;
    public readonly creatorUsername: string;
    public readonly creationCommitHash: string;
    public readonly creationTimestamp: number;
    public readonly modificationTimestamp: number;

    constructor(id: number, repositoryUsername: string, repositoryName: string, filePath: string, columnNumber: number, content: string, creatorUsername: string, creationCommitHash: string, creationTimestamp: number, modificationTimestamp: number)
    {
        this.id = id;
        this.repositoryUsername = repositoryUsername;
        this.repositoryName = repositoryName;
        this.filePath = filePath;
        this.columnNumber = columnNumber;
        this.content = content;
        this.creatorUsername = creatorUsername;
        this.creationCommitHash = creationCommitHash;
        this.creationTimestamp = creationTimestamp;
        this.modificationTimestamp = modificationTimestamp;
    }

    public static validate(codeComment: Readonly<Record<keyof CodeComment, any>>): boolean
    {
        const {
            id,
            repositoryUsername, repositoryName, filePath, columnNumber, content,
            creatorUsername, creationCommitHash, creationTimestamp, modificationTimestamp,
        } = codeComment;
        return Number.isInteger(id)
            && typeof repositoryUsername === 'string'
            && typeof repositoryName === 'string'
            && typeof filePath === 'string'
            && Number.isInteger(columnNumber) && columnNumber > 0
            && typeof content === 'string'
            && typeof creatorUsername === 'string'
            && typeof creationCommitHash === 'string'
            && Number.isInteger(creationTimestamp)
            && Number.isInteger(modificationTimestamp);
    }

    public static from(codeComment: Readonly<Record<keyof CodeComment, any>>): CodeComment
    {
        if (!CodeComment.validate(codeComment))
        {
            throw new TypeError();
        }
        const {
            id,
            repositoryUsername, repositoryName, filePath, columnNumber, content,
            creatorUsername, creationCommitHash, creationTimestamp, modificationTimestamp,
        } = codeComment;
        return new CodeComment(id,
            repositoryUsername, repositoryName, filePath, columnNumber, content,
            creatorUsername, creationCommitHash, creationTimestamp, modificationTimestamp);
    }
}