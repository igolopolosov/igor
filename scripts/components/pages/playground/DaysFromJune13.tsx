import * as moment from 'moment';
import * as React from 'react';
import { CurrentTime } from '../../_blocks/CurrentTime';

export class DaysFromJune13 extends React.PureComponent<{}, {difference: string}> {

    public state = {
        difference: '???'
    };

    constructor(props: {}) {
        super(props);

        this.calculateDifference();
    }

    public render() {
        return (
            <div>
                <h1>{`It took ${this.state.difference} days from June 13.`}</h1>
                <CurrentTime />
            </div>
        );
    }

    private calculateDifference() {
        const JUNE_13_DAY = 164;
        const cm = moment();
        const cy = cm.year();
        const june13 = moment('1994-06-13').year(
            cm.dayOfYear() >= JUNE_13_DAY ? cy : cy - 1
        );

        this.state = {
            difference: cm.diff(june13, 'days').toString()
        };
    }

}
