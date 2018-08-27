import {createAnimatedCircle, createBouncedCircle} from '../circleFactory';
import {AnimatedElement} from '../../animatedElement';

describe('createAnimatedCircle', () => {
    test('should create animated element with circle inside', () => {
        const circle = createAnimatedCircle({
            cx: 1,
            cy: 2,
            r: 3,
        });

        expect(circle instanceof AnimatedElement).toBe(true);
        expect(circle.getElement().tagName).toBe('circle');
    });
});

describe('createBouncedCircle', () => {
    test('should create animated element with circle inside', () => {
        const circle = createBouncedCircle({
            cx: 1,
            cy: 2,
            r: 3,
        }, {
            x: 1,
            y: 2,
        }, {
            ground: 1,
            resistanceX: 2,
        });

        expect(circle instanceof AnimatedElement).toBe(true);
        expect(circle.getElement().tagName).toBe('circle');
    });
});
