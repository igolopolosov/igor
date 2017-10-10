import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Pager } from '../_blocks/Pager'

const YANDEX_API_LINK = 'https://cloud-api.yandex.net:443/v1/disk/public/resources/download'
const PUBLIC_KEY = 'https%3A%2F%2Fyadi.sk%2Fd%2FS16MSRKVz4uRV'
const BLOG_PATH = '/blog.json'

const BLOG_URL = `${YANDEX_API_LINK}?public_key=${PUBLIC_KEY}&path=${BLOG_PATH}`

export class Blog extends React.PureComponent {

	static propTypes = {
		location: PropTypes.any
	}

	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			limit: 2,
			page: parseInt(this.props.location.query && this.props.location.query.page, 10) || 1
		}

		const makeJSON = r => r.json()

		fetch(BLOG_URL, { method: 'GET' })
		.then(makeJSON)
		.then(r => {
			if (r.error) {
				throw r
			}
			return fetch(r.href, { method: 'GET' })
		})
		.then(makeJSON)
		.then(r => this.showPosts(r))
		.catch(e => console.warn(e.message, e))
	}

	/**
	 * Show loaded blogs
	 * @param {Object[]} posts
	 */
	showPosts(posts) {
		if (posts) {
			this.setState({
				posts: posts.filter(post => post.id && post.title && post.time && post.text)
			})
		}
	}

	/**
	 * Set current page
	 * @param {number} page
	 */
	setPage(page) {
		this.setState({ page })
	}

	render() {
		const { limit, page, posts } = this.state
        const visiblePosts = (post, i) => i >= (page - 1) * limit && i < page * limit
        const pages = [...Array(Math.ceil(posts.length / limit))].map((v, i) => i + 1)

		return (
			<div className='blog'>
				{
					(posts.filter(visiblePosts) || []).map(post =>
						<div key={post.id} className='blog-post'>
							<h2 className='blog-post__title'>{post.title}</h2>
							<h3 className='blog-post__info'>
								<span className='blog-post__tag'>{post.tag}</span>
								<span className='blog-post__date'>{moment.unix(post.time).format('LL')}</span>
							</h3>
							<p className='blog-post__text'>{post.text}</p>
						</div>
					)
				}
				<Pager
					pages={pages}
					current={page}
					onChange={this.setPage.bind(this)}
				/>
			</div>
		)
	}

}
