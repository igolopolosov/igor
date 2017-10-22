import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Navigation.css'

export class Navigation extends React.PureComponent {

	static propTypes = {
		links: PropTypes.arrayOf(PropTypes.shape({
			to: PropTypes.string,
			title: PropTypes.string
		})),
		external: PropTypes.bool
    }

	render() {
		return (
			<div className={styles.container}>
				{(this.props.links || []).map(link =>
					this.props.external
					? 	<a
							target='_blank'
							key={link.to}
							href={link.to}
						>
							-{link.title}-
						</a>
					:	<Link
							key={link.to}
							to={link.to}
						>
							-{link.title}-
						</Link>
				)}
			</div>
		)
	}

}