import React from 'react'
import { Link } from 'react-router'

export class Navigation extends React.Component {

	static propTypes = {
		links: React.PropTypes.arrayOf(React.PropTypes.shape({
			to: React.PropTypes.string,
			title: React.PropTypes.string
		})),
		external: React.PropTypes.bool
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
							onlyActiveOnIndex={true}
							activeClassName='navigation__link--active'
							key={link.to} to={link.to}>
							{link.title}
						</Link>
				)}
			</div>
		)
	}

}
