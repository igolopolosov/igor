import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import { ThemeToggle } from './blocks/ThemeToggle'
import { Footer } from './Footer'
import { Header } from './Header'
import { NAVIGATION_LINKS } from '../consts/navigation'
import { Blog } from './pages/blog/Blog'
import { Home } from './pages/home/Home'
import { NoMatch } from './pages/NoMatch'
import { PrivacyPolicyTap } from './pages/privacy-policy-tap/PrivacyPolicyTap'
import { Playground } from './pages/playground/Playground'
import { Music } from './pages/music/Music'

const styles = require('./Main.less')

interface MainState {
	isFullScreen: boolean
}

export class Main extends React.PureComponent<{}, MainState> {

	constructor(props) {
		super(props)

		this.state = {
			isFullScreen: false
		}
	}

	toggleFullScreen = () => {
		this.setState(state => ({
			isFullScreen: !state.isFullScreen
		}))
	}

	render() {
		const { isFullScreen } = this.state
		const notFullScreen = !isFullScreen;

		return (
			<div className={styles.container}>
				{notFullScreen && <Header />}

				<div className={styles.fullScreen} onClick={this.toggleFullScreen}>
					{isFullScreen ? '+' : '='}
				</div>

				<main className={styles.content}>
					<Switch>
						<Route path={NAVIGATION_LINKS.home.to} exact component={Home} />
						<Route path={NAVIGATION_LINKS.blog.to} component={Blog} />

						<Redirect
							exact
							from={NAVIGATION_LINKS.playground.to}
							to={NAVIGATION_LINKS.playground.circleCanon.to}
						/>
						<Route path={NAVIGATION_LINKS.playground.to} component={Playground} />
						
						<Route path={NAVIGATION_LINKS.music.to} component={Music} />

						<Route path={NAVIGATION_LINKS.privacyPolicyTap.to} component={PrivacyPolicyTap} />
						
						<Route path='*' component={NoMatch} />
					</Switch>
				</main>

				{notFullScreen && <Footer />}

				{notFullScreen && <ThemeToggle />}
			</div>
		)
	}

}
