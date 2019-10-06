import { decreaseAbs } from "../utils/decreaseAbs";
import {
  AnimationCallback,
  IAnimationParams,
  IBounceParams
} from "./movement2D.interface";
import { lapse } from "./timeConverter";

/**
 * Each time returns zero speed vector - it stops the movement
 */
export const stop2DMovement: AnimationCallback = () => {
  return {
    speedVector: {
      x: 0,
      y: 0
    }
  };
};

/**
 * Describes gravity movement
 * x speed isn't changing
 * y speed has acceleration of free fall
 */
export const gravity2DMovement: AnimationCallback = (
  params: IAnimationParams
) => {
  const acceleration = lapse(9.8 * params.frame);

  return {
    speedVector: {
      x: params.speedVector.x,
      y: params.speedVector.y + acceleration
    }
  };
};

/**
 * Combines gravity movement and tracking hits by the ground
 * Each hit by the ground reverses y speed
 * When shape has zero x speed and low y speed it will stopped on the ground
 */
export const getBounce2DMovement = (
  params: IBounceParams
): AnimationCallback => {
  const { ground, resistanceX } = params;
  let frame = 0;

  return (vectorParams: IAnimationParams) => {
    const isGoingDown = vectorParams.speedVector.y > 0;
    const isLowYSpeed = vectorParams.speedVector.y < 1;
    const isZeroXSpeed = vectorParams.speedVector.x === 0;

    // stop
    if (isZeroXSpeed && isLowYSpeed) {
      return stop2DMovement(vectorParams);
    }

    if (vectorParams.coordinates.y > ground && isGoingDown) {
      frame = 0;

      let speedX = vectorParams.speedVector.x;
      const speedY = -vectorParams.speedVector.y / 3;

      // hit by ground
      if (isLowYSpeed) {
        speedX = decreaseAbs(vectorParams.speedVector.x, resistanceX);
      }

      return {
        speedVector: {
          x: speedX,
          y: speedY
        },
        coordinates: {
          x: vectorParams.coordinates.x,
          y: ground
        }
      };
    } else {
      // gravity
      const result = gravity2DMovement({
        ...vectorParams,
        frame
      });

      frame++;

      return result;
    }
  };
};
