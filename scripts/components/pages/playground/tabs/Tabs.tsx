import * as React from 'react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom'

import { PaneProps } from './Pane';
const styles = require('./Tabs.css');

namespace TabsNS {
    export interface Props {
        selected?: number;
        children: ReactElement<PaneProps>[];
    }

    export interface State {
        selected: number;
    }
}

export class Tabs extends React.PureComponent<TabsNS.Props, {}> {

    private renderTab = (item: ReactElement<PaneProps>) => {
        return (
            <NavLink
                activeClassName={styles.tabHeaderItemSelected}
                className={styles.tabHeaderItem}
                key={item.props.url}
                to={item.props.url}
            >
                {item.props.label}
            </NavLink>
        )
    };

    public render() {
        const {children} = this.props;

        return (
            <div className={styles.tabHeader}>
                {children.map(this.renderTab)}
            </div>
        );
    }
}
