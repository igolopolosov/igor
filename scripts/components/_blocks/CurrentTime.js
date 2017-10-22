import React from 'react'
import moment from 'moment'

const SECOND = 1000

export class CurrentTime extends React.PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			time: moment() / SECOND
		}
		setInterval(() => {
			this.setState({ time: moment() / SECOND })
		}, 5 * SECOND)
	}

	render() {
		return (
			<div>
				<small>
					{`unix: ${this.state.time}, human: ${moment.unix(this.state.time).format('LLLL')}`}
				</small>
			</div>
		)
	}

}
