export class Notification
{
    public readonly id: number;
    public readonly username: string;
    public readonly content: string;
    public readonly type: string;
    public readonly timestamp: number;
    public readonly confirmed: boolean;

    constructor(id: number, username: string, content: string, type: string, timestamp: number, confirmed: boolean)
    {
        this.id = id;
        this.username = username;
        this.content = content;
        this.type = type;
        this.timestamp = timestamp;
        this.confirmed = confirmed;
    }

    public static validate(notification: Readonly<Record<keyof Notification, any>>): boolean
    {
        const {id, username, content, type, timestamp, confirmed} = notification;
        return typeof id === 'number'
            && typeof username === 'string'
            && typeof content === 'string'
            && typeof type === 'string'
            && typeof timestamp === 'number'
            && typeof confirmed === 'boolean';
    }

    public static from(notification: Readonly<Record<keyof Notification, any>>): Notification
    {
        if (!Notification.validate(notification))
        {
            throw new TypeError();
        }
        const {id, username, content, type, timestamp, confirmed} = notification;
        return new Notification(id, username, content, type, timestamp, confirmed);
    }
}