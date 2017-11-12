import { ReactElement } from 'react';

export interface PaneProps {
    label: string;
    children: ReactElement<any>;
}

export function Pane(props: PaneProps) {
    return props.children;
}
