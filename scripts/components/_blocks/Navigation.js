import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Navigation.css'

/**
 * Main navigation component
 * Can show internal and external links
 */
export class Navigation extends React.PureComponent {

	static propTypes = {
		links: PropTypes.arrayOf(PropTypes.shape({
			to: PropTypes.string,
			title: PropTypes.string
		})),
		external: PropTypes.bool
	}
	
	renderLink(link) {
		const title = `-${link.title}-`;

		return (
			this.props.external
				? 	<a
						target='_blank'
						rel='noopener'
						key={link.to}
						href={link.to}
					>
						{title}
					</a>
				:	<Link
						key={link.to}
						to={link.to}
					>
						{title}
					</Link>
		)
	}

	render() {
		return (
			<div className={styles.container}>
				{
					(this.props.links || []).map(link => this.renderLink(link))
				}
			</div>
		)
	}

}
