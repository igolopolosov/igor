import * as React from 'react';
import { connect } from 'react-redux';
import { generateRandomInt } from '../../helpers/math';
import { setLines, setPages } from '../../reducers/prediction';
import { Button } from '../_blocks/Button';
import { AnyAction } from 'redux';

namespace PredictionBookNS {
    export interface OwnProps {}

    export interface StateProps {
        pages: number;
        lines: number;
    }

    export interface DispatchProps {
        selectPages: (amount: number) => AnyAction;
        selectLines: (amount: number) => AnyAction;
    }

    export type Props = OwnProps & StateProps & DispatchProps;

    export interface State {
        answer: string;
    }
}

class PredictionBookComponent extends React.PureComponent<PredictionBookNS.Props, PredictionBookNS.State> {

    public state: PredictionBookNS.State;

    constructor(props: PredictionBookNS.Props) {
        super(props);

        this.state = {
            answer: ''
        };
    }

    public render() {
        const {pages, lines, selectPages, selectLines} = this.props;

        return (
            <div>
                <h1>{`Prediction Book`}</h1>
                <p>{`Choose some book and enter next information.`}</p>
                <p>
                    <label>{`Number of pages in a book: `}</label>
                    <input value={pages} onChange={(e: any) => selectPages(e.target.value)} type='number'/>
                </p>
                <p>
                    <label>{`Number of lines on a page: `}</label>
                    <input value={lines} onChange={(e: any) => selectLines(e.target.value)} type='number'/>
                </p>
                <p>
                    <Button onClick={this.generateRandomLine} primary>
                        {`Make Magic!`}
                    </Button>
                </p>
                <p>
                    {this.state.answer}
                </p>
            </div>
        );
    }

    /**
     * Compose prediction place
     */
    private generateRandomLine = (): void => {
        const {pages, lines} = this.props;
        let answer = '';

        if (pages < 1 || lines < 1) {
            answer = `Enter above positive number of pages and lines less than ${Number.MAX_VALUE}.`;
        } else {
            answer = `
                Prediction for you is placed on
                page ${generateRandomInt(1, pages)},  on
                line ${generateRandomInt(1, lines)}
                from ${generateRandomInt(1, 2) === 2 ? 'top' : 'bottom'}.
            `;
        }

        this.setState({answer: answer});
    }
}


export const PredictionBook =
    connect<PredictionBookNS.StateProps, PredictionBookNS.DispatchProps, PredictionBookNS.OwnProps>
    (
        (state) => ({...state.prediction}),
        {
            selectPages: setPages,
            selectLines: setLines
        }
    )
    (PredictionBookComponent);
