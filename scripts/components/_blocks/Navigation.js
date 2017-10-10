import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
			<div className='navigation'>
				{(this.props.links || []).map(link =>
					this.props.external
					? 	<a className='navigation__link'
							target='_blank'
							key={link.to} href={link.to}>
							{link.title}
						</a>
					:	<Link className='navigation__link'
							onlyActiveOnIndex
							activeClassName='navigation__link--active'
							key={link.to} to={link.to}>
							{link.title}
						</Link>
				)}
			</div>
		)
	}

}
