/**
 * @class
 * @description 提交的详细信息
 * */
export class Commit
{
    public readonly commitHash: string;  // %H
    public readonly committerName: string;   // %cn
    public readonly committerEmail: string;  // %ce
    public readonly timestamp: number;   // 毫秒 %ct
    public readonly message: string; // %s
    public readonly body: string;    // %b

    constructor(commitHash: string, committerName: string, committerEmail: string, timestamp: number, message: string, body: string)
    {
        this.commitHash = commitHash;
        this.committerName = committerName;
        this.committerEmail = committerEmail;
        this.timestamp = timestamp;
        this.message = message;
        this.body = body;
    }

    public static validate(commit: Readonly<Record<keyof Commit, any>>): boolean
    {
        const {commitHash, committerName, committerEmail, timestamp, message, body} = commit;
        return typeof commitHash === 'string'
            && typeof committerName === 'string'
            && typeof committerEmail === 'string'
            && typeof timestamp === 'number'
            && typeof message === 'string'
            && typeof body === 'string';
    }

    public static from(commit: Readonly<Record<keyof Commit, any>>): Commit
    {
        if (!Commit.validate(commit))
        {
            throw new TypeError();
        }
        const {commitHash, committerName, committerEmail, timestamp, message, body} = commit;
        return new Commit(commitHash, committerName, committerEmail, timestamp, message, body);
    }
}