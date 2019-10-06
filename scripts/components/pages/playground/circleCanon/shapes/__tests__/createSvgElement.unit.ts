import { createSvgElement } from "../createSvgElement";

describe("createSvgElement", () => {
  test("should create given svg element with correct namespace", () => {
    const path = createSvgElement("path");

    expect(path.tagName).toBe("path");
    expect(path.namespaceURI).toBe("http://www.w3.org/2000/svg");
  });

  test("should create element with provided attributes", () => {
    const path = createSvgElement("g", {
      fill: "red",
      className: "abc"
    });

    expect(path.getAttribute("fill")).toBe("red");
    expect(path.getAttribute("className")).toBe("abc");
  });

  test("should enhance svg and add method get/set number attributes", () => {
    const path = createSvgElement("g", {
      r: 1
    });

    path.setNumberAttribute("x", 2);

    expect(path.getNumberAttribute("r")).toBe(1);
    expect(path.getNumberAttribute("x")).toBe(2);
  });

  test("should provide same behavior and return null for missed attributes", () => {
    const path = createSvgElement("g");

    expect(path.getNumberAttribute("asd")).toBe(null);
  });
});
