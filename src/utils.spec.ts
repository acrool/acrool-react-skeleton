import { getSizeValue, getRadiusValue } from './utils';
import { TSizeValue } from './types';

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3)
})

describe('getSizeValue', () => {
    it('should return "100%" when value is true', () => {
        expect(getSizeValue(true)).toBe('100%');
    });
    it('should return "auto" when value is false', () => {
        expect(getSizeValue(false)).toBe('auto');
    });
    it('should return number + px when value is a number', () => {
        expect(getSizeValue(12)).toBe('12px');
    });
    it('should return value as string when value is a string', () => {
        expect(getSizeValue('auto')).toBe('auto');
        expect(getSizeValue('50%')).toBe('50%');
        expect(getSizeValue('2em')).toBe('2em');
        expect(getSizeValue('3fr')).toBe('3fr');
        expect(getSizeValue('1.5rem')).toBe('1.5rem');
    });
});

describe('getRadiusValue', () => {
    it('should return undefined when value is true', () => {
        expect(getRadiusValue(true)).toBeUndefined();
    });
    it('should return "auto" when value is false', () => {
        expect(getRadiusValue(false)).toBe('auto');
    });
    it('should return number + px when value is a number', () => {
        expect(getRadiusValue(8)).toBe('8px');
    });
    it('should return value as string when value is a string', () => {
        expect(getRadiusValue('auto')).toBe('auto');
        expect(getRadiusValue('50%')).toBe('50%');
        expect(getRadiusValue('2em')).toBe('2em');
        expect(getRadiusValue('3fr')).toBe('3fr');
        expect(getRadiusValue('1.5rem')).toBe('1.5rem');
    });
});

export {}
