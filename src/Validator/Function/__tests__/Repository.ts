import {name} from '../Repository';
import 'jest-extended';

describe(name, () =>
{
    it('should handle name with 0 chars', function ()
    {
        expect(name('')).toBeFalse();
    });

    it('should handle name with 1 chars', function ()
    {
        expect(name('a')).toBeTrue();
    });

    it('should handle name with 10 chars', function ()
    {
        expect(name('a'.repeat(10))).toBeTrue();
    });

    it('should handle name with 20 chars', function ()
    {
        expect(name('a'.repeat(20))).toBeTrue();
    });

    it('should handle name with 21 chars', function ()
    {
        expect(name('a'.repeat(21))).toBeFalse();
    });

    it('should handle name with empty char', function ()
    {
        expect(name('kgsegsuilgulsglis ueh')).toBeFalse();
        expect(name('3wha\tafeageaga')).toBeFalse();
        expect(name('aegaegaegaeg\nagq3')).toBeFalse();
        expect(name('grgsgsrg\vgeg')).toBeFalse();
    });

    it('should handle name without empty char', function ()
    {
        expect(name('faageg')).toBeTrue();
    });
});