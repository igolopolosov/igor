import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import styles from './Pager.css'


class PagerContainer extends React.PureComponent {

	static propTypes = {
		pages: PropTypes.arrayOf(PropTypes.number),
		current: PropTypes.number,
		onChange: PropTypes.func,
		router: PropTypes.any,
		location: PropTypes.any
	}

	/**
	 * Handler for page changing
	 * @param {number} page
	 */
	onPageChange(page) {
		this.props.router.push({
			...this.props.location,
			query: { page: page }
		})

		if (this.props.onChange) {
			this.props.onChange(page)
		}
	}

	render() {
		return (
			<div>
				{(this.props.pages || []).map(page =>
					<a
						key={page}
						onClick={this.onPageChange.bind(this, page)}
						className={`${styles.item} ${this.props.current === page && styles.itemActive}`}
					>
						{page}
					</a>
				)}
			</div>
		)
	}

}

export const Pager = withRouter(PagerContainer)
