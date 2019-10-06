import { createCircle } from "../circle";

describe("circle", () => {
  test("createCircle should create svg circle with attributes", () => {
    const circle = createCircle({
      cx: 1,
      cy: 2,
      r: 3
    });

    expect(circle.getNumberAttribute("cx")).toBe(1);
    expect(circle.getNumberAttribute("cy")).toBe(2);
    expect(circle.getNumberAttribute("r")).toBe(3);
  });
});
