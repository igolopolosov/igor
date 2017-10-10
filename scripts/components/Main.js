import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import { Switch, Route } from 'react-router'

import { CurrentTime } from './_blocks/CurrentTime'
import { Navigation } from './_blocks/Navigation'
import { Blog } from './pages/Blog'
import { DaysFromJune13 } from './pages/DaysFromJune13'
import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'
import { PredictionBook } from './pages/PredictionBook'
import { TapPrivacyPolicy } from './pages/TapTap'

const projectLinks = [
	{
		to: '/',
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
    },
    {
        to: 'https://github.com/usehotkey/usehotkey.github.io/blob/master/ResumeGolopolosov.pdf',
        title: 'CV'
    }
]

export class Main extends React.PureComponent {

	static propTypes = {
		children: PropTypes.node
    }

	render() {
		return (
			<div className='root'>

				<div className='root__header'>
					<Navigation links={projectLinks} />
				</div>

				<div className='root__content'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/blog' component={Blog} />
						<Route path='/prediction-book' component={PredictionBook} />
						<Route path='/days-from-june-13' component={DaysFromJune13} />
						<Route path='/privacy-policy-tap' component={TapPrivacyPolicy} />
						<Route path='*' component={NoMatch} />
					</Switch>
				</div>

				<div className='root__footer'>
					<div>{'Social:'}</div>
					<Navigation links={socialLinks} external />
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
