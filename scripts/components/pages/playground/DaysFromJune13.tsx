import { getDayOfYear, getYear, differenceInCalendarDays } from 'date-fns';
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

        const now = new Date();
        const thisYear = getYear(now);
        const june13 = new Date(
            getDayOfYear(now) >= JUNE_13_DAY ? thisYear : thisYear - 1,
            5,
            13
        );

        this.state = {
            difference: differenceInCalendarDays(now, june13).toString()
        };
    }

}
