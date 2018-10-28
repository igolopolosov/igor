import { getTime, format } from 'date-fns';
import * as React from 'react';

const SECOND = 1000;

/**
 * Displays current time in unix and human readable formats
 */
export class CurrentTime extends React.PureComponent {

    state;

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

        setInterval(() => this.setState({date: new Date()}), 5 * SECOND);
    }

    render() {
        const { date } = this.state;

        return (
            <h3>
                {`unix: ${getTime(date)}, human: ${format(date, 'Do MMMM YYYY, HH:mm A')}`}
            </h3>
        );
    }

}

/**
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 * Displays current time in unix and human readable formats
 */
