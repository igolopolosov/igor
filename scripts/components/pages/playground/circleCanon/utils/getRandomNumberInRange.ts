/**
 * Generate float number in range from min to max
 */
export function getRandomNumberInRange(min: number, max: number) {
    return min + Math.random() * (max - min);
}

/**
 * Generate integer number in range from min to max
 */
export function getRandomNumberInRangeRounded(min: number, max: number) {
    return Math.round(getRandomNumberInRange(min, max));
}
