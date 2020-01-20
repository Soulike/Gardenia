import {password, username} from '../Account';
import 'jest-extended';

describe(username, () =>
{
    it('should handle username with 0 chars', function ()
    {
        expect(username('')).toBeFalse();
    });

    it('should handle username with 1 chars', function ()
    {
        expect(username('a')).toBeTrue();
    });

    it('should handle username with 10 chars', function ()
    {
        expect(username('a'.repeat(10))).toBeTrue();
    });

    it('should handle username with 20 chars', function ()
    {
        expect(username('a'.repeat(20))).toBeTrue();
    });

    it('should handle username with 21 chars', function ()
    {
        expect(username('a'.repeat(21))).toBeFalse();
    });

    it('should handle username with number', function ()
    {
        expect(username('123')).toBeTrue();
    });

    it('should handle username with alphabet', function ()
    {
        expect(username('abc')).toBeTrue();
    });

    it('should handle username with underscore', function ()
    {
        expect(username('_')).toBeTrue();
    });

    it('should handle username with other chars', function ()
    {
        expect(username('123.a_')).toBeFalse();
    });
});

describe(password, () =>
{
    it('should handle password with empty char', function ()
    {
        expect(password('kgsegsuilgulsglis ueh')).toBeFalse();
        expect(password('3wha\tafeageaga')).toBeFalse();
        expect(password('aegaegaegaeg\nagq3')).toBeFalse();
        expect(password('grgsgsrg\vgeg')).toBeFalse();
    });

    it('should handle password without empty char', function ()
    {
        expect(password('faageg')).toBeTrue();
    });

    it('should handle password with 5 chars', function ()
    {
        expect(password('a1~!@')).toBeFalse();
    });

    it('should handle password with 6 chars', function ()
    {
        expect(password('b4><?:')).toBeTrue();
    });

    it('should handle password with more than 6 chars', function ()
    {
        expect(password('kbvs895792!@#$%^&*()+}{:>?<'.repeat(10))).toBeTrue();
    });
});