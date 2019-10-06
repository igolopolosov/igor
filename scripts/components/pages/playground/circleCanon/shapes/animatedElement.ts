import { animate } from "../animation/animate";
import {
  AnimationCallback,
  I2DCoordinates,
  I2DVector
} from "../animation/movement2D.interface";
import { lapse } from "../animation/timeConverter";
import { ISVGElement } from "./createSvgElement";

/**
 * Container class to manage animations for svg element
 */
export class AnimatedElement {
  private element: ISVGElement;
  private speedVector!: I2DVector;
  private coordinates: I2DCoordinates;
  private animationCallback!: AnimationCallback;
  private xKey: string;
  private yKey: string;
  private frame = 0;

  constructor(element: ISVGElement, xKey: string = "x", yKey: string = "y") {
    this.element = element;
    this.xKey = xKey;
    this.yKey = yKey;

    this.coordinates = {
      x: this.element.getNumberAttribute(this.xKey),
      y: this.element.getNumberAttribute(this.yKey)
    };
  }

  /**
   * Get svg element
   * Use to put to collections
   */
  public getElement(): ISVGElement {
    return this.element;
  }

  /**
   * Configure animation
   */
  public setupAnimation(
    initialVector: I2DVector,
    animationCallback: AnimationCallback
  ) {
    this.speedVector = initialVector;
    this.animationCallback = animationCallback;
  }

  /**
   * Configure and start animation
   */
  public animate() {
    animate(params => {
      const { timeDelta } = params || { timeDelta: 0 };
      const adjustedDelta = lapse(timeDelta);
      const nextCoordinates = this.getNextCoordinates(adjustedDelta);

      this.frame += 1;
      const { speedVector, coordinates } = this.animationCallback({
        speedVector: this.speedVector,
        coordinates: nextCoordinates,
        frame: this.frame
      });

      this.speedVector = speedVector;
      this.updateCoordinates(coordinates || nextCoordinates);
    }, Number.POSITIVE_INFINITY);
  }

  /**
   * Calculate new coordinates for next time
   */
  private getNextCoordinates(timeDelta: number) {
    return {
      x: Math.ceil(this.coordinates.x + this.speedVector.x * timeDelta),
      y: Math.ceil(this.coordinates.y + this.speedVector.y * timeDelta)
    };
  }

  /**
   * Update current position of element
   */
  private updateCoordinates(coordinates: I2DCoordinates) {
    this.coordinates = coordinates;

    this.element.setNumberAttribute(this.xKey, this.coordinates.x);
    this.element.setNumberAttribute(this.yKey, this.coordinates.y);
  }
}
