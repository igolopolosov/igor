import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { selectLines, selectPages } from '../../reducers/prediction'
import { Button } from '../_blocks/Button'

@connect(
	(state) => ({ ...state.prediction }),
	{
		selectPages,
		selectLines
	}
)
export class PredictionBook extends React.PureComponent {

	static propTypes = {
		pages: PropTypes.string,
		lines: PropTypes.string,
		selectPages: PropTypes.func,
		selectLines: PropTypes.func,
	}

	constructor(props) {
		super(props)

		this.state = {
			answer: null
		}
	}

	/**
	 * Generate random integer number
	 * @param {number} max
	 */
	generateRandomInt(max) {
		return Math.round(Math.random() * (max - 1)) + 1
	}

	/**
	 * Compose predicition place
	 */
	generateRandomLine() {
		let answer = ''
		const { pages, lines } = this.props

		if (pages < 1 || lines < 1) {
			answer = `Enter above positive number of pages and lines less than ${Number.MAX_VALUE}.`
		} else {
			answer = `
          Prediction for you is placed on
          page ${this.generateRandomInt(pages)},  on
          line ${this.generateRandomInt(lines)}
          from ${this.generateRandomInt(2) === 2 ? 'top' : 'bottom'}.
        `
		}

		this.setState({ answer: answer })
	}

	render() {
		const { pages, lines, selectPages, selectLines } = this.props

		return (
			<div>
				<h1> {`Prediction Book`} </h1>
				<p>{`Choose some book and enter next information.`}</p>
				<p>
					<label>{`Number of pages in a book: `}</label>
					<input value={pages} onChange={(e) => selectPages(e.target.value)} type='number' />
				</p>
				<p>
					<label>{`Number of lines on a page: `}</label>
					<input value={lines} onChange={(e) => selectLines(e.target.value)}  type='number' />
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
		)
	}

}
