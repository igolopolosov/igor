import React from 'react'
import moment from 'moment'
import { CurrentTime } from '../_blocks/CurrentTime'

export class DaysFromJune13 extends React.PureComponent {

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
			<div>
				<h1>{`It took ${this.state.difference} days from June 13.`}</h1>
				<CurrentTime />
			</div>
		)
	}

}
