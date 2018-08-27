import {App} from '../app';
import {DrawPanel} from '../drawPanel';

describe('app', () => {
    test('app should start without error', () => {
        const app = new App();

        expect(() => app.run()).not.toThrow();
    });

    test('DrawPanel should start without error', () => {
        expect(() => new DrawPanel()).not.toThrow();
    });
});
