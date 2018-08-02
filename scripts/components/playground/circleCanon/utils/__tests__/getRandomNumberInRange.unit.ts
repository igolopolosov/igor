import {getRandomNumberInRange, getRandomNumberInRangeRounded} from '../getRandomNumberInRange';

describe('getRandomNumberInRange', () => {
    test('should return random number from give range', () => {
        const randomNumber = getRandomNumberInRange(5, 8);

        expect(randomNumber).toBeGreaterThanOrEqual(5);
        expect(randomNumber).toBeLessThanOrEqual(8);
    });

    test('should return NaN when input is wrong', () => {
        const randomNumber = getRandomNumberInRange(NaN, NaN);

        expect(isNaN(randomNumber)).toBe(true);
    });
});

describe('getRandomNumberInRangeRounded', () => {
    test('should return integer number', () => {
        const randomNumber = getRandomNumberInRangeRounded(1, 4);
        const stringNumber = randomNumber.toString();

        expect(stringNumber.split('.')[0]).toBe(stringNumber);

        const parsedNumber = parseInt(stringNumber, 10);
        expect(isNaN(parsedNumber)).toBe(false);
    });
});
