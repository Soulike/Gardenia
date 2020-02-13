export function parseTimestampToDifference(timestamp: number): string
{
    const date = new Date(timestamp);
    const nowDate = new Date();

    const yearDiff = nowDate.getFullYear() - date.getFullYear();
    const monthDiff = nowDate.getMonth() - date.getMonth();
    const dateDiff = nowDate.getDate() - date.getDate();
    const hourDiff = nowDate.getHours() - date.getHours();
    const minuteDiff = nowDate.getMinutes() - date.getMinutes();
    const secondDiff = nowDate.getSeconds() - date.getSeconds();

    if (Math.abs(yearDiff) >= 1) // 一年以上
    {
        return `${yearDiff} 年前`;
    }
    else if (Math.abs(monthDiff) >= 1)  // 不满一年，一个月以上
    {
        return `${monthDiff} 个月前`;
    }
    else if (Math.abs(dateDiff) >= 1) // 不满一个月，一天以上
    {
        return `${dateDiff} 天前`;
    }
    else if (Math.abs(hourDiff) >= 1) // 不满一天，一小时以上
    {
        return `${hourDiff} 小时前`;
    }
    else if (Math.abs(minuteDiff) >= 1) // 不满一小时，一分钟以上
    {
        return `${minuteDiff} 分钟前`;
    }
    else if (Math.abs(secondDiff) >= 1) // 不满一分钟，一秒以上
    {
        return `${secondDiff} 秒前`;
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