import {decreaseAbs} from '../decreaseAbs';

describe('decreaseAbs', () => {
    test('should return 0 when passed value is 0. decrement doesn\'t change value', () => {
        expect(decreaseAbs(0, 12)).toBe(0);
        expect(decreaseAbs(0, 1)).toBe(0);
    });

    test('should return 0 when decrement more than value by module', () => {
        expect(decreaseAbs(3, 7)).toBe(0);
        expect(decreaseAbs(-2, 8)).toBe(0);
    });

    test('should return value decremented by module, when decrement is positive number', () => {
        expect(decreaseAbs(10, 5)).toBe(5);
        expect(decreaseAbs(-10, 4)).toBe(-6);
    });

    test('should return value incremented by module, when decrement is negative number', () => {
        expect(decreaseAbs(10, -5)).toBe(15);
        expect(decreaseAbs(-10, -4)).toBe(-14);
    });
});
