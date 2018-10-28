export interface PaneProps {
    label: string;
    url: string;
    children: any;
}

export function Pane(props: PaneProps) {
    return props.children;
}
