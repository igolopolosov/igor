/**
 * Generate random integer number
 */
export function generateRandomInt(min: number, max: number): number {
    return Math.round(Math.random() * (max - min)) + min;
}
