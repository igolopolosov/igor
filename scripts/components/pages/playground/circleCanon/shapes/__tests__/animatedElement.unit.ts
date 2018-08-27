import {AnimatedElement} from '../animatedElement';
import {createSvgElement} from '../createSvgElement';

describe('AnimatedElement', () => {
    test('method getElement should provide access to passed element', () => {
        const element = createSvgElement('g');
        const animatedElement = new AnimatedElement(element);

        expect(animatedElement.getElement()).toBe(element);
    });
});
