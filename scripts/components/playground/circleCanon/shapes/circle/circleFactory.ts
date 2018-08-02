import {getBounce2DMovement} from '../../animation/movement2D';
import {I2DVector, IBounceParams} from '../../animation/movement2D.interface';
import {generateColor} from '../../utils/generateColor';
import {AnimatedElement} from '../animatedElement';
import {createCircle} from './circle';
import {ICircleParams} from './circle.interface';

/**
 * Factory function to create animated circle element
 */
export function createAnimatedCircle(params: ICircleParams) {
    const circle = createCircle(params);

    return new AnimatedElement(circle, 'cx', 'cy');
}

/**
 * Factory function to create animated circle element with:
 * - bounce animation
 * - random color
 */
export function createBouncedCircle(circleParams: ICircleParams,
                                    initialVector: I2DVector,
                                    bounceParams: IBounceParams) {
    const circle = createAnimatedCircle({
        ...circleParams,
        fill: generateColor(),
    });

    circle.setupAnimation(initialVector, getBounce2DMovement({
        ...bounceParams,
        ground: bounceParams.ground - circleParams.r,
    }));

    return circle;
}
