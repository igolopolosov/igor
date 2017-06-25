import React from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import { configureStore } from '../configureStore'

import { Main } from './Main'
import { Home } from './Home'
import { Blog } from './Blog'
import { PredictionBook } from './PredictionBook'
import { DaysFromJune13 } from './DaysFromJune13'
import { NoMatch } from './NoMatch'
import {TapPrivacyPolicy} from './privacyPolicy/Tap'

const store = configureStore()

export const App = () => (
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={Home} />
				<Route path='/blog' component={Blog} />
				<Route path='/prediction-book' component={PredictionBook} />
				<Route path='/days-from-june-13' component={DaysFromJune13} />
				<Route path='/privacy-policy-tap' component={TapPrivacyPolicy} />
				<Route path='*' component={NoMatch} />
			</Route>
		</Router>
	</Provider>
)
