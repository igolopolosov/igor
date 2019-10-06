import { lapse } from "../timeConverter";

describe("lapse", () => {
  test("should slow time by divide time on 100", () => {
    expect(lapse(1000)).toBe(10);
  });
});
