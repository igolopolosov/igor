/**
 * Decrease value on decrement
 * It doesn't matter what this number is, a positive or negative number
 */
export function decreaseAbs(value: number, decrement: number) {
  if (value === 0) {
    return 0;
  }

  if (value > 0) {
    const nextValue = value - decrement;
    return nextValue < 0 ? 0 : nextValue;
  } else {
    const nextValue = value + decrement;
    return nextValue > 0 ? 0 : nextValue;
  }
}
