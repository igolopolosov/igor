import {
  getBounce2DMovement,
  gravity2DMovement,
  stop2DMovement
} from "../movement2D";
import { IAnimationParams } from "../movement2D.interface";

function createAnimationParameters(): IAnimationParams {
  return {
    speedVector: {
      x: 15,
      y: 15
    },
    coordinates: {
      x: 0,
      y: 0
    },
    frame: 100
  };
}

describe("stop2DMovement", () => {
  test("should return speedVector with zero coordinates", () => {
    expect(stop2DMovement({} as any)).toEqual({
      speedVector: {
        x: 0,
        y: 0
      }
    });
  });
});

describe("gravity2DMovement", () => {
  test("should simulate gravity", () => {
    const params = gravity2DMovement(createAnimationParameters());

    expect(params).toEqual({
      speedVector: {
        x: 15,
        y: 24.8
      }
    });
  });
});

describe("getBounce2DMovement", () => {
  const bounceMovement = getBounce2DMovement({
    ground: 0,
    resistanceX: 10
  });

  test("should stop movement when speed by x = 0, and speed by y is low", () => {
    const params = bounceMovement({
      speedVector: {
        x: 0,
        y: 0.5
      },
      coordinates: null,
      frame: null
    } as any);

    expect(params).toEqual({
      speedVector: {
        x: 0,
        y: 0
      }
    });
  });

  test("should invert y speed, when shape hit the ground", () => {
    const params = createAnimationParameters();
    params.coordinates.y = 1;

    expect(bounceMovement(params)).toEqual({
      speedVector: {
        x: 15,
        y: -5
      },
      coordinates: {
        x: 0,
        y: 0
      }
    });
  });

  test("should decrease x speed, when shape bouncing near the ground with low y speed", () => {
    const params = createAnimationParameters();
    params.coordinates.y = 1;
    params.speedVector.y = 0.75;

    expect(bounceMovement(params)).toEqual({
      speedVector: {
        x: 5,
        y: -0.25
      },
      coordinates: {
        x: 0,
        y: 0
      }
    });
  });

  test("should work as gravity2Dmovement in normal situation", () => {
    const params = createAnimationParameters();
    bounceMovement(params); // heat one time

    expect(bounceMovement(params)).toEqual({
      speedVector: {
        x: 15,
        y: 15.098
      }
    });
  });
});
