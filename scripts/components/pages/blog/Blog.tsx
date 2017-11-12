import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { BlogPost } from '../../../reducers/blog';
import { Pager } from '../../_blocks/Pager';
import { NAVIGATION_LINKS } from '../../navigation';
import { loadBlog } from './loadBlog';

const styles = require('./Blog.css');

namespace BlogContainerNS {
    interface OwnProps {
        location: any;
    }

    interface StateProps {
        posts: BlogPost[];
    }

    interface DispatchProps {
        loadBlog: () => void;
    }

    export type Props = StateProps & DispatchProps & OwnProps;
}

class BlogContainer extends React.PureComponent<BlogContainerNS.Props> {

    /**
     * Render blog post
     */
    private renderItem = (post: BlogPost) => {
        return (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <h3>
                    <span className={styles.tag}>{post.tag}</span>
                    <span>{moment.unix(post.time).format('LL')}</span>
                </h3>
                <p>{post.text}</p>
            </div>
        );
    };

    constructor(props) {
        super(props);

        this.props.loadBlog();
    }

    public render() {
        const {posts} = this.props;

        return (
            <div className={styles.container}>
                <Pager
                    pathName={NAVIGATION_LINKS.blog.to}
                    items={posts}
                    renderItem={this.renderItem}
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
