import {BlockDiff} from './BlockDiff';

export class FileDiff
{
    public readonly path: string;
    public readonly isNew: boolean;
    public readonly isDeleted: boolean;
    public readonly blockDiffs: BlockDiff[];

    constructor(path: string, isNew: boolean, isDeleted: boolean, blockDiffs: BlockDiff[])
    {
        if (isNew && isDeleted)  // 不可能同时新建和删除
        {
            throw Error('文件不可能同时被新建和被删除');
        }
        this.path = path;
        this.isNew = isNew;
        this.isDeleted = isDeleted;
        this.blockDiffs = [];
        for (const blockDiff of blockDiffs)  // deep clone
        {
            this.blockDiffs.push(BlockDiff.from(blockDiff));
        }
    }

    public static validate(fileDiff: Readonly<Record<keyof FileDiff, any>>): boolean
    {
        const {path, isNew, isDeleted, blockDiffs} = fileDiff;
        return typeof path === 'string'
            && typeof isNew === 'boolean'
            && typeof isDeleted === 'boolean'
            && Array.isArray(blockDiffs);
    }

    public static from(fileDiff: Readonly<Record<keyof FileDiff, any>>): FileDiff
    {
        if (!FileDiff.validate(fileDiff))
        {
            throw TypeError();
        }
        const {path, isNew, isDeleted, blockDiffs} = fileDiff;
        return new FileDiff(path, isNew, isDeleted, blockDiffs);
    }
}