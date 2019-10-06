/**
 * Create array with given length
 */
export function getArrayWithLength(length: number, value?: number): number[] {
  let i = length;
  const arr: number[] = [];

  while (i) {
    i--;
    const item = value !== undefined ? value : i;
    arr.push(item);
  }

  return arr;
}
