import * as moment from 'moment';
import * as React from 'react';
import { withRouter } from 'react-router';
import { extractPage, Pager } from '../_blocks/Pager';
import { NAVIGATION_LINKS } from '../navigation';

const styles = require('./Blog.css');

const YANDEX_API_LINK = 'https://cloud-api.yandex.net:443/v1/disk/public/resources/download';
const PUBLIC_KEY = 'https%3A%2F%2Fyadi.sk%2Fd%2FS16MSRKVz4uRV';
const BLOG_PATH = '/blog.json';

const BLOG_URL = `${YANDEX_API_LINK}?public_key=${PUBLIC_KEY}&path=${BLOG_PATH}`;

class BlogContainer extends React.PureComponent<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            limit: 2,
            page: parseInt(extractPage(this.props.location.search), 10) || 1
        };

        const makeJSON = r => r.json();

        fetch(BLOG_URL, {method: 'GET'})
            .then(makeJSON)
            .then(r => {
                if (r.error) {
                    throw r;
                }
                return fetch(r.href, {method: 'GET'});
            })
            .then(makeJSON)
            .then(r => this.showPosts(r))
            .catch(e => console.warn(e.message, e));
    }

    /**
     * Show loaded blogs
     * @param {Object[]} posts
     */
    private showPosts(posts: any[]): void {
        this.setState({
            posts: (posts || []).filter(post => post.id && post.title && post.time && post.text)
        });
    }

    /**
     * Set current page
     * @param {number} page
     */
    private setPage = (page: number) =>{
        this.setState({page});
    };

    public render() {
        const {limit, page, posts} = this.state;
        const visiblePosts = (_, i) => i >= (page - 1) * limit && i < page * limit;
        const pages = [...Array(Math.ceil(posts.length / limit))].map((_, i) => i + 1);

        return (
            <div className={styles.container}>
                {
                    (posts.filter(visiblePosts) || []).map(post =>
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <h3>
                                <span className={styles.tag}>{post.tag}</span>
                                <span>{moment.unix(post.time).format('LL')}</span>
                            </h3>
                            <p>{post.text}</p>
                        </div>
                    )
                }
                <Pager
                    pathName={NAVIGATION_LINKS.blog.to}
                    pages={pages}
                    current={page}
                    onChange={this.setPage}
                />
            </div>
        );
    }

}

export const Blog = withRouter(BlogContainer);
