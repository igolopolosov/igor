import * as React from 'react';

namespace NumberInputNS {
    export interface Props {
        value: number;
        onChange(value: number): void;
    }
}

export class NumberInput extends React.PureComponent<NumberInputNS.Props> {
    private onChange = (e) => {
        this.props.onChange(e.target.value);
    };

    public render() {
        return <input {...this.props} onChange={this.onChange} type="number" />;
    }
}
