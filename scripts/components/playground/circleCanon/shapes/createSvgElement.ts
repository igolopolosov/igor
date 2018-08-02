export interface ISVGElement extends SVGElement {
    getNumberAttribute(name: string): number;
    setNumberAttribute(name: string, value: number): void;
}

/**
 * Factory for creating svg elements
 */
export function createSvgElement<N extends keyof ElementTagNameMap, P extends any>(name: N, params?: P):
    ISVGElement {
    const node = document.createElementNS('http://www.w3.org/2000/svg', name) as ISVGElement;

    if (params) {
        for (const param in params) {
            node.setAttributeNS('', param, params[param]);
        }
    }

    node.getNumberAttribute = (attributeName: string): number => {
        const attribute = node.getAttribute(attributeName);

        return attribute === null
            ? attribute as any
            : parseInt(attribute || '0', 10);
    };

    node.setNumberAttribute = (attributeName: string, value: number): void => {
        node.setAttribute(attributeName, value.toString());
    };

    return node;
}
