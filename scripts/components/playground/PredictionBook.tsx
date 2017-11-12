import * as React from 'react';
import { connect } from 'react-redux';
import { setLines, setPages } from '../../reducers/prediction';
import { Button } from '../_blocks/Button';

interface Props {
    pages: number;
    lines: number;
    selectPages: any;
    selectLines: any;
}

interface State {
    answer: string;
}

class PredictionBookComponent extends React.Component<any, State> {

    public state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            answer: ''
        };
    }

    public render() {
        const {pages, lines, selectPages, selectLines} = this.props;

        return (
            <div>
                <h1> {`Prediction Book`} </h1>
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
                    <Button onClick={this.generateRandomLine.bind(this)} primary>
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
     * Generate random integer number
     * @param {number} max
     */
    private generateRandomInt(max: number): number {
        return Math.round(Math.random() * (max - 1)) + 1;
    }

    /**
     * Compose predicition place
     */
    private generateRandomLine() {
        let answer = '';
        const {pages, lines} = this.props;

        if (pages < 1 || lines < 1) {
            answer = `Enter above positive number of pages and lines less than ${Number.MAX_VALUE}.`;
        } else {
            answer = `
                Prediction for you is placed on
                page ${this.generateRandomInt(pages)},  on
                line ${this.generateRandomInt(lines)}
                from ${this.generateRandomInt(2) === 2 ? 'top' : 'bottom'}.
            `;
        }

        this.setState({answer: answer});
    }
}


export const PredictionBook = connect((state) => ({...state.prediction}),
    {
        selectPages: setPages,
        selectLines: setLines
    })
(PredictionBookComponent);
