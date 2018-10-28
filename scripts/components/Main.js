import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import { Footer } from './Footer'
import { Header } from './Header'
import styles from './Main.css'
import { NAVIGATION_LINKS } from '../consts/navigation'
import { Blog } from './pages/blog/Blog'
import { Home } from './pages/home/Home'
import { NoMatch } from './pages/NoMatch'
import { PrivacyPolicyTap } from './pages/privacy-policy-tap/PrivacyPolicyTap'
import { Playground } from './pages/playground/Playground'
import { Music } from './pages/music/Music';


export class Main extends React.PureComponent {
	render() {
		return (
			<div className={styles.container}>
				<Header />

				<div className={styles.content}>
					<Switch>
						<Route path={NAVIGATION_LINKS.home.to} exact component={Home} />
						<Route path={NAVIGATION_LINKS.blog.to} component={Blog} />

						<Redirect exact from={NAVIGATION_LINKS.playground.to} to={NAVIGATION_LINKS.playground.to + "/circle-canon"} />
						<Route path={NAVIGATION_LINKS.playground.to} component={Playground} />
						
						<Route path={NAVIGATION_LINKS.music.to} component={Music} />

						<Route path={NAVIGATION_LINKS.privacyPolicyTap.to} component={PrivacyPolicyTap} />
						
						<Route path='*' component={NoMatch} />
					</Switch>
				</div>

				<Footer />
			</div>
		)
	}

}
