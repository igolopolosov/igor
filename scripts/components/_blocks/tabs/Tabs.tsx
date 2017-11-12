import * as React from 'react';
import { ReactElement } from 'react';
import { PaneProps } from './Pane';

namespace TabsNS {
    export interface Props {
        selected?: number;
        children: ReactElement<PaneProps>[];
    }

    export interface State {
        selected: number;
    }
}

export class Tabs extends React.PureComponent<TabsNS.Props, TabsNS.State> {

    public state: TabsNS.State;

    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected || 0,
        };
    }

    private selectItem(itemNumber: number) {
        this.setState({selected: itemNumber});
    };

    private renderTab = (item: ReactElement<PaneProps>, index: number) => {
        return (
            <span
                key={index}
                onClick={() => this.selectItem(index)}
            >
                {item.props.label}
            </span>
        )
    };

    public render() {
        const {children} = this.props;

        return (
            <div>
                <div>
                    {children.map(this.renderTab)}
                </div>
                {children.map((item, index) => index === this.state.selected && item)}
            </div>
        );
    }
}
