import {fireCircles} from './fireCircles';
import {createSvgElement} from './shapes/createSvgElement';

/**
 * Fullscreen svg component for render elements
 */
export class DrawPanel {
    private panel!: SVGElement;

    constructor() {
        this.setupDrawPanel();
        this.listenClicks();
    }

    /**
     * Setup panel to document body
     */
    private setupDrawPanel() {
        this.panel = createSvgElement('svg');
        this.panel.setAttribute('class', 'draw-panel');
        document.body.appendChild(this.panel);
    }

    /**
     * Handle user clicks by panel
     */
    private listenClicks() {
        this.panel.onclick = (event: MouseEvent) => fireCircles(this.panel, event);
    }
}
