import * as React from 'react';
import { fireCircles } from './circleCanon/fireCircles';
import { getRandomNumberInRangeRounded } from './circleCanon/utils/getRandomNumberInRange';
const styles = require('./circleCanon.css');

export class CircleCanon extends React.PureComponent<{}, {}> {

    private panelRef: React.RefObject<any>;
    private circleTimerId: any;

    constructor(props) {
        super(props);
        this.panelRef = React.createRef();
    }

    componentDidMount() {
        this.circleTimerId = setInterval(() => {
            const panel = this.panelRef.current;
            const panelRect = panel.getBoundingClientRect();

            const x = getRandomNumberInRangeRounded(0, panelRect.width);
            const y = getRandomNumberInRangeRounded(panelRect.top, panelRect.bottom);

            fireCircles(this.panelRef.current, {clientX: x, clientY: y} as any);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.circleTimerId);
    }

    public render() {
        return (
            <div>
                <h3>Click below to see the magic!</h3>
                <svg
                    ref={this.panelRef}
                    className={styles.main}
                    onClick={(event) => fireCircles(this.panelRef.current as any, event as any)}
                />
            </div>
        );
    }
}
