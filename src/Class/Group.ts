export class Group
{
    public id: number;
    public name: string;

    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }

    public static from(obj: Readonly<Record<keyof Group, any>>): Group
    {
        if (!Group.validate(obj))
        {
            throw new TypeError('Source object is not a Group instance');
        }
        const {id, name} = obj;
        return new Group(id, name);
    }

    public static validate(obj: Readonly<Record<keyof Group, any>>): boolean
    {
        const {id, name} = obj;
        return typeof id === 'number' && typeof name === 'string';
    }
}