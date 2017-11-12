import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NAVIGATION_LINKS } from '../../navigation';
import { extractPage, Pager } from '../../_blocks/Pager';
import { loadBlog } from './loadBlog';

const styles = require('./Blog.css');

class BlogContainer extends React.PureComponent<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            limit: 2,
            page: parseInt(extractPage(this.props.location.search), 10) || 1
        };

        this.props.loadBlog();
    }

    /**
     * Set current page
     * @param {number} page
     */
    private setPage = (page: number) =>{
        this.setState({page});
    };

    public render() {
        const {limit, page} = this.state;
        const {posts} = this.props;
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

const BlogWithRouter = withRouter(BlogContainer);
export const Blog = connect(
    store => ({...store.blog}),
    {
        loadBlog
    }
)(BlogWithRouter);
