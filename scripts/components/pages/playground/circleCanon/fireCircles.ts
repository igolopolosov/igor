import {getRandomNumberInRange, getRandomNumberInRangeRounded} from './utils/getRandomNumberInRange';
import {getArrayWithLength} from './utils/getArrayWithLength';
import {createBouncedCircle} from './shapes/circle/circleFactory';

/**
 * Here you can configure firing.
 * Fire several bounced circle of random size in random direction with random speed
 * Ground is panel bottom
 */
export function fireCircles(panel: SVGElement, event: MouseEvent) {
    const panelTop = panel.getBoundingClientRect().top;

    getArrayWithLength(getRandomNumberInRangeRounded(1, 10))
        .forEach(() => {
            const circle = createBouncedCircle({
                cx: event.clientX,
                cy: event.clientY - panelTop,
                r: getRandomNumberInRangeRounded(5, 15),
            }, {
                x: getRandomNumberInRange(-50, 50),
                y: getRandomNumberInRange(-50, 50),
            }, {
                resistanceX: 2,
                ground: panel.clientHeight,
            });

            panel.appendChild(circle.getElement());
            circle.animate();
        });
}
