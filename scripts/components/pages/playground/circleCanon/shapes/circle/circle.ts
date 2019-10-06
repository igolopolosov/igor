import { createSvgElement } from "../createSvgElement";
import { ICircleParams } from "./circle.interface";

/**
 * Factory function to create circle element
 */
export function createCircle(params: ICircleParams) {
  return createSvgElement("circle", params);
}
