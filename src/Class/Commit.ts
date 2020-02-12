/**
 * @class
 * @description 提交的详细信息
 * */
export class Commit
{
    public commitHash: string;
    public committerName: string;
    public committerEmail: string;
    public time: string;
    public message: string;
    public body: string;

    /**
     * @constructor
     * @param commitHash - 提交的全长哈希值
     * @param committerName - 提交人姓名
     * @param committerEmail - 提交人 email
     * @param time - 提交距现在的时间
     * @param message - 提交信息
     * @param body - 提交详细信息
     * */
    constructor(commitHash: string, committerName: string, committerEmail: string, time: string, message: string, body: string)
    {
        this.commitHash = commitHash;
        this.committerName = committerName;
        this.committerEmail = committerEmail;
        this.time = time;
        this.message = message;
        this.body = body;
    }
}