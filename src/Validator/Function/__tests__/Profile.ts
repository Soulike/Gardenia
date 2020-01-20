import {email, nickname} from '../Profile';
import 'jest-extended';

describe(nickname, () =>
{
    it('should handle nickname with 0 chars', function ()
    {
        expect(nickname('')).toBeFalse();
    });

    it('should handle nickname with 1 chars', function ()
    {
        expect(nickname('a')).toBeTrue();
    });

    it('should handle nickname with 10 chars', function ()
    {
        expect(nickname('a'.repeat(10))).toBeTrue();
    });

    it('should handle nickname with 20 chars', function ()
    {
        expect(nickname('a'.repeat(20))).toBeTrue();
    });

    it('should handle nickname with 21 chars', function ()
    {
        expect(nickname('a'.repeat(21))).toBeFalse();
    });

    it('should handle nickname with empty char', function ()
    {
        expect(nickname('kgsegsuilgulsglis ueh')).toBeFalse();
        expect(nickname('3wha\tafeageaga')).toBeFalse();
        expect(nickname('aegaegaegaeg\nagq3')).toBeFalse();
        expect(nickname('grgsgsrg\vgeg')).toBeFalse();
    });

    it('should handle nickname without empty char', function ()
    {
        expect(nickname('faageg')).toBeTrue();
    });
});

describe(email, () =>
{
    it('should handle valid email', function ()
    {
        expect(email('a_b哈哈.哈@example.store')).toBeTrue();
    });

    it('should handle invalid email', function ()
    {
        expect(email('a@@b.com')).toBeFalse();
        expect(email('agagae')).toBeFalse();
        expect(email('@a.com')).toBeFalse();
        expect(email('a.com')).toBeFalse();
    });
});