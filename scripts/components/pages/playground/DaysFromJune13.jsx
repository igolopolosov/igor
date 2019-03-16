import { getDayOfYear, getYear, differenceInCalendarDays, getTime, format } from 'date-fns';
import * as React from 'react';
import { CurrentTime } from '../../blocks/CurrentTime';

export class DaysFromJune13 extends React.PureComponent {

    state = {
        difference: '???'
    };

    constructor(props) {
        super(props);

        this.calculateDifference();
    }

    render() {
        return (
            <React.Fragment>
                <h1>{`It took ${this.state.difference} days from June 13.`}</h1>
                
                <CurrentTime>
                    {({ date }) => (
                        <h3>
                            {`unix: ${getTime(date)}, human: ${format(date, 'Do MMMM YYYY, HH:mm A')}`}
                        </h3>
                    )}
                </CurrentTime>
            </React.Fragment>
        );
    }

    calculateDifference() {
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
