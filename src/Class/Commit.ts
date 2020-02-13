/**
 * @class
 * @description 提交的详细信息
 * */
export class Commit
{
    public commitHash: string;  // %H
    public committerName: string;   // %cn
    public committerEmail: string;  // %ce
    public timestamp: number;   // 毫秒 %ct * 1000
    public message: string; // %s
    public body: string;    // %b

    constructor(commitHash: string, committerName: string, committerEmail: string, timestamp: number, message: string, body: string)
    {
        this.commitHash = commitHash;
        this.committerName = committerName;
        this.committerEmail = committerEmail;
        this.timestamp = timestamp;
        this.message = message;
        this.body = body;
    }
}