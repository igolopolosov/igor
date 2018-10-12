import { getTime, format } from 'date-fns';
import * as React from 'react';

const SECOND = 1000;

namespace CurrentTimeNS {
    export interface State {
        date: Date;
    }
}

export class CurrentTime extends React.PureComponent<{}, CurrentTimeNS.State> {

    public state: CurrentTimeNS.State;

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

        setInterval(() => this.setState({date: new Date()}), 5 * SECOND);
    }

    public render() {
        const { date } = this.state;

        return (
            <h3>
                {`unix: ${getTime(date)}, human: ${format(date, 'Do MMMM YYYY, HH:mm A')}`}
            </h3>
        );
    }

}
