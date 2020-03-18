import {parseTimestampToDate, parseTimestampToDifference} from '../Date';

describe('parseTimestampToDifference', () =>
{
    it('应当正确转换时间差', function ()
    {
        const SECOND = 1000;
        const MINUTE = 60 * SECOND;
        const HOUR = 60 * MINUTE;
        const DAY = 24 * HOUR;
        const WEEK = 7 * DAY;
        const MONTH = 30 * DAY;
        const YEAR = 365 * DAY;

        const now = Date.now();

        expect(parseTimestampToDifference(now)).toBe('刚刚');

        expect(parseTimestampToDifference(now - SECOND)).toBe('1 秒前');
        expect(parseTimestampToDifference(now - 30 * SECOND)).toBe('30 秒前');
        expect(parseTimestampToDifference(now - 59 * SECOND)).toBe('59 秒前');

        expect(parseTimestampToDifference(now - MINUTE)).toBe('1 分钟前');
        expect(parseTimestampToDifference(now - 30 * MINUTE)).toBe('30 分钟前');
        expect(parseTimestampToDifference(now - 59 * MINUTE)).toBe('59 分钟前');

        expect(parseTimestampToDifference(now - HOUR)).toBe('1 小时前');
        expect(parseTimestampToDifference(now - 12 * HOUR)).toBe('12 小时前');
        expect(parseTimestampToDifference(now - 23 * HOUR)).toBe('23 小时前');

        expect(parseTimestampToDifference(now - DAY)).toBe('1 天前');
        expect(parseTimestampToDifference(now - 3 * DAY)).toBe('3 天前');
        expect(parseTimestampToDifference(now - 6 * DAY)).toBe('6 天前');

        expect(parseTimestampToDifference(now - WEEK)).toBe('1 周前');
        expect(parseTimestampToDifference(now - 2 * WEEK)).toBe('2 周前');
        expect(parseTimestampToDifference(now - 4 * WEEK)).toBe('4 周前');

        expect(parseTimestampToDifference(now - MONTH)).toBe('1 个月前');
        expect(parseTimestampToDifference(now - 6 * MONTH)).toBe('6 个月前');
        expect(parseTimestampToDifference(now - 11 * MONTH)).toBe('11 个月前');

        expect(parseTimestampToDifference(now - YEAR)).toBe('1 年前');
        expect(parseTimestampToDifference(now - 6 * YEAR)).toBe('6 年前');
    });
});

describe('parseTimestampToDate', () =>
{
    it('应当正确转换时间戳到日期', function ()
    {
        const date = new Date(2020, 2 - 1, 29, 13, 3, 25);
        expect(parseTimestampToDate(date.getTime())).toBe('2020-02-29 13:03:25');
    });
});