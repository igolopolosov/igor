import * as moment from 'moment';
import * as React from 'react';

const SECOND = 1000;

namespace CurrentTimeNS {
    export interface State {
        time: number;
    }
}

export class CurrentTime extends React.PureComponent<{}, CurrentTimeNS.State> {

    public state: CurrentTimeNS.State;

    constructor(props) {
        super(props);

        this.state = {
            time: +moment() / SECOND
        };

        setInterval(() => this.setState({time: +moment() / SECOND}), 5 * SECOND);
    }

    public render() {
        return (
            <h3>
                {`unix: ${this.state.time}, human: ${moment.unix(this.state.time).format('LLLL')}`}
            </h3>
        );
    }

}
