import { generateColor } from "../generateColor";

describe("generateColor", () => {
  test("should return valid rgba string", () => {
    const rgbaRegexp = /^rgba\((\d+),(\d+),(\d+),(\d+)\)$/;
    expect(rgbaRegexp.test(generateColor())).toBe(true);
  });
});
