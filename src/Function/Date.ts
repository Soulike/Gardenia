export function parseTimestampToDifference(timestamp: number): string
{
    const nowTimestamp = Date.now();
    const timestampDiff = Math.abs(nowTimestamp - timestamp);

    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const WEEK = 7 * DAY;
    const MONTH = 30 * DAY;
    const YEAR = 365 * DAY;

    if (timestampDiff > YEAR) // 一年以上
    {
        return `${Math.floor(timestampDiff / YEAR)} 年前`;
    }
    else if (timestampDiff > MONTH)  // 不满一年，一个月以上
    {
        return `${Math.floor(timestampDiff / MONTH)} 个月前`;
    }
    else if (timestampDiff > WEEK) // 不满一个月，一周以上
    {
        return `${Math.floor(timestampDiff / WEEK)} 周前`;
    }
    else if (timestampDiff > DAY) // 不满一周，一天以上
    {
        return `${Math.floor(timestampDiff / DAY)} 天前`;
    }
    else if (timestampDiff > HOUR) // 不满一天，一小时以上
    {
        return `${Math.floor(timestampDiff / HOUR)} 小时前`;
    }
    else if (timestampDiff > MINUTE) // 不满一小时，一分钟以上
    {
        return `${Math.floor(timestampDiff / MINUTE)} 分钟前`;
    }
    else if (timestampDiff > SECOND) // 不满一分钟，一秒以上
    {
        return `${Math.floor(timestampDiff / SECOND)} 秒前`;
    }
    else    // 不满一秒
    {
        return `刚刚`;
    }
}

export function parseTimestampToDate(timestamp: number): string
{
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}