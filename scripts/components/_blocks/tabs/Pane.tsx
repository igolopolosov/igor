export interface PaneProps {
    label: string;
    children: any;
}

export function Pane(props: PaneProps) {
    return props.children;
}
