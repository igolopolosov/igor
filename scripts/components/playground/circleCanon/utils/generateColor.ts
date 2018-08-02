import {getRandomNumberInRangeRounded} from './getRandomNumberInRange';

/**
 * Generate random RGBA color
 */
export function generateColor(): string {
    const r = getRandomNumberInRangeRounded(0, 255);
    const g = getRandomNumberInRangeRounded(0, 255);
    const b = getRandomNumberInRangeRounded(0, 255);

    return `rgba(${r},${g},${b},1)`;
}
