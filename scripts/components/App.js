import React from 'react'
import moment from 'moment'
import { Navigation } from './Navigation'
import { CurrentTime } from './CurrentTime'

const projectLinks = [
	{
		to: '',
		title: 'Home'
	},
	{
		to: 'blog',
		title: 'Blog'
	},
	{
		to: 'prediction-book',
		title: 'Prediction Book'
	},
	{
		to: 'days-from-june-13',
		title: 'Days from June 13'
	}
]

const socialLinks = [
	{
		to: 'https://soundcloud.com/hotkeymusic',
		title: 'SoundCloud'
	},
	{
		to: 'https://github.com/usehotkey',
		title: 'GitHub'
	}
]

export class App extends React.Component {

	static propTypes = {
		children: React.PropTypes.node
	}

	render() {
		return (
			<div className='root'>

				<div className='root__header'>
					<Navigation links={projectLinks} />
				</div>

				<div className='root__content'>
					{this.props.children}
				</div>

				<div className='root__footer'>
					<div>{`Social:`}</div>
					<Navigation links={socialLinks} external={true} />
					<div>
						<small>
							{`Igor Golopolosov, 2016-${moment().year()}. igolopolosov@gmail.com`}
						</small>
					</div>
					<CurrentTime />
				</div>

			</div>
		)
	}

}
