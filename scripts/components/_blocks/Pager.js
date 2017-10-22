import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import styles from './Pager.css'

const PAGE_SEPARATOR = 'page='
export function extractPage(search) {
	return search.split(PAGE_SEPARATOR)[1]
}

class PagerContainer extends React.PureComponent {

	static propTypes = {
		pathName: PropTypes.string,
		pages: PropTypes.arrayOf(PropTypes.number),
		current: PropTypes.number,
		onChange: PropTypes.func,
        history: PropTypes.object,
		location: PropTypes.object
	}

	/**
	 * Handler for page changing
	 * @param {number} page
	 */
	onPageChange(page) {
		const {onChange, history, pathName} = this.props

		history.push(`${pathName}?${PAGE_SEPARATOR}${page}`)

        onChange(page)
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
