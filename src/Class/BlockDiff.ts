export class BlockDiff
{
    public readonly info: string;
    public readonly code: string;

    constructor(info: string, code: string)
    {
        this.info = info;
        this.code = code;
    }

    public static validate(blockDiff: Readonly<Record<keyof BlockDiff, any>>): boolean
    {
        const {info, code} = blockDiff;
        return typeof info === 'string' && typeof code === 'string';
    }

    public static from(blockDiff: Readonly<Record<keyof BlockDiff, any>>): BlockDiff
    {
        if (!BlockDiff.validate(blockDiff))
        {
            throw TypeError();
        }
        const {info, code} = blockDiff;
        return new BlockDiff(info, code);
    }
}