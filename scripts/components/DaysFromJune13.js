import React from 'react'
import moment from 'moment'

export class DaysFromJune13 extends React.Component {

	constructor(props) {
		super(props)

		const JUNE_13_DAY = 164,
			cm = moment(),
			cy = cm.year(),
			june13 = moment('1994-06-13').year(
				cm.dayOfYear() >= JUNE_13_DAY ? cy : cy - 1
			)

		this.state = {
			difference: cm.diff(june13, 'days')
		}
	}

	render() {
		return (
			<h1>{
				`It took ${this.state.difference} days from June 13.`}
			</h1>
		)
	}

}
