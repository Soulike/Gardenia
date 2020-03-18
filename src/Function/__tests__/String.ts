import {getNumberAbbreviation} from '../String';

describe('getNumberAbbreviation', () =>
{
    it('应当获取正确缩写', function ()
    {
        expect(getNumberAbbreviation(0)).toBe('0');
        expect(getNumberAbbreviation(345)).toBe('345');
        expect(getNumberAbbreviation(999)).toBe('999');

        expect(getNumberAbbreviation(1000)).toBe('1.0 千');
        expect(getNumberAbbreviation(5631)).toBe('5.6 千');
        expect(getNumberAbbreviation(9999)).toBe('10.0 千');

        expect(getNumberAbbreviation(10000)).toBe('1.0 万');
        expect(getNumberAbbreviation(36546)).toBe('3.7 万');
        expect(getNumberAbbreviation(656789)).toBe('65.7 万');
    });
});