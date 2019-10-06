import { getArrayWithLength } from "../getArrayWithLength";

describe("getArrayWithLength", () => {
  test("should return array of given length", () => {
    const arr = getArrayWithLength(13);
    expect(arr).toHaveLength(13);
  });

  test("should populate array with value as second parameter", () => {
    const arr = getArrayWithLength(12, 3);

    expect(arr).toHaveLength(12);
    expect(arr.every(item => item === 3)).toBe(true);
  });
});
