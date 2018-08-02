export interface IAnimationParams {
    speedVector: I2DVector;
    coordinates: I2DCoordinates;
    frame: number;
}

export interface IAnimationResult {
    speedVector: I2DVector;
    coordinates?: I2DCoordinates;
}

export type AnimationCallback = (params: IAnimationParams) => IAnimationResult;

export interface I2DVector {
    x: number;
    y: number;
}

export interface I2DCoordinates {
    x: number;
    y: number;
}

export interface IBounceParams {
    ground: number;
    resistanceX: number;
}
