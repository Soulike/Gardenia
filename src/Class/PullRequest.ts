import {PULL_REQUEST_STATUS} from '../CONSTANT';

export class PullRequest
{
    public readonly id: number | undefined;
    public readonly no: number;
    public readonly sourceRepositoryUsername: string;
    public readonly sourceRepositoryName: string;
    public readonly sourceRepositoryBranchName: string;
    public readonly sourceRepositoryCommitHash: string;
    public readonly targetRepositoryUsername: string;
    public readonly targetRepositoryName: string;
    public readonly targetRepositoryBranchName: string;
    public readonly targetRepositoryCommitHash: string;
    public readonly creationTime: number;
    public readonly modificationTime: number;
    public readonly title: string;
    public readonly content: string;
    public readonly status: PULL_REQUEST_STATUS;


    constructor(id: number | undefined, no: number, sourceRepositoryUsername: string, sourceRepositoryName: string, sourceRepositoryBranchName: string, sourceRepositoryCommitHash: string, targetRepositoryUsername: string, targetRepositoryName: string, targetRepositoryBranchName: string, targetRepositoryCommitHash: string, creationTime: number, modificationTime: number, title: string, content: string, status: PULL_REQUEST_STATUS)
    {
        this.id = id;
        this.no = no;
        this.sourceRepositoryUsername = sourceRepositoryUsername;
        this.sourceRepositoryName = sourceRepositoryName;
        this.sourceRepositoryBranchName = sourceRepositoryBranchName;
        this.sourceRepositoryCommitHash = sourceRepositoryCommitHash;
        this.targetRepositoryUsername = targetRepositoryUsername;
        this.targetRepositoryName = targetRepositoryName;
        this.targetRepositoryBranchName = targetRepositoryBranchName;
        this.targetRepositoryCommitHash = targetRepositoryCommitHash;
        this.creationTime = creationTime;
        this.modificationTime = modificationTime;
        this.title = title;
        this.content = content;
        this.status = status;
    }

    public static validate(pullRequest: Readonly<Record<keyof PullRequest, any>>): boolean
    {
        const {
            id, no,
            sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranchName, sourceRepositoryCommitHash,
            targetRepositoryUsername, targetRepositoryName, targetRepositoryBranchName, targetRepositoryCommitHash,
            creationTime, modificationTime, title, content, status,
        } = pullRequest;
        return (typeof id === 'number' || id === undefined)
            && typeof no === 'number'
            && typeof sourceRepositoryUsername === 'string'
            && typeof sourceRepositoryName === 'string'
            && typeof sourceRepositoryBranchName === 'string'
            && typeof sourceRepositoryCommitHash === 'string'
            && typeof targetRepositoryUsername === 'string'
            && typeof targetRepositoryName === 'string'
            && typeof targetRepositoryBranchName === 'string'
            && typeof targetRepositoryCommitHash === 'string'
            && typeof creationTime === 'number'
            && typeof modificationTime === 'number'
            && typeof title === 'string'
            && typeof content === 'string'
            && Object.values(PULL_REQUEST_STATUS).includes(status);
    }

    public static from(pullRequest: Readonly<Record<keyof PullRequest, any>>): PullRequest
    {
        if (!PullRequest.validate(pullRequest))
        {
            throw new TypeError();
        }
        const {
            id, no,
            sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranchName, sourceRepositoryCommitHash,
            targetRepositoryUsername, targetRepositoryName, targetRepositoryBranchName, targetRepositoryCommitHash,
            creationTime, modificationTime, title, content, status,
        } = pullRequest;
        return new PullRequest(id, no,
            sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranchName, sourceRepositoryCommitHash,
            targetRepositoryUsername, targetRepositoryName, targetRepositoryBranchName, targetRepositoryCommitHash,
            creationTime, modificationTime, title, content, status);
    }
}