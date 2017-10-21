import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'

import { Footer } from './Footer'
import { Header } from './Header'
import { Blog } from './pages/Blog'
import { DaysFromJune13 } from './pages/DaysFromJune13'
import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'
import { PredictionBook } from './pages/PredictionBook'
import { PrivacyPolicyTap } from './pages/PrivacyPolicyTap'


export class Main extends React.PureComponent {

	static propTypes = {
		children: PropTypes.node
    }

	render() {
		return (
			<div className='root'>
				<Header />

				<div className='root__content'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/blog' component={Blog} />
						<Route path='/prediction-book' component={PredictionBook} />
						<Route path='/days-from-june-13' component={DaysFromJune13} />
						<Route path='/privacy-policy-tap' component={PrivacyPolicyTap} />
						<Route path='*' component={NoMatch} />
					</Switch>
				</div>

				<Footer />
			</div>
		)
	}

}
