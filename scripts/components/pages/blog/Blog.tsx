import { parse, format } from 'date-fns';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { BlogPost } from '../../../reducers/blog';
import { Pager } from '../../blocks/Pager';
import { NAVIGATION_LINKS } from '../../../consts/navigation';
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
     * Render title of blog
     */
    private renderItem = (post: BlogPost) => {
        const date = parse(post.time * 1000);
        const formattedDate = format(date, 'MMMM DD, YYYY');

        return (
            <a key={post.id} className={styles.post}>
                <span className={styles.title}>{post.title}</span>
                <span>{formattedDate}</span>
            </a>
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
                {
                    posts && posts.length > 0
                        ? <Pager
                            limit={5}
                            pathName={NAVIGATION_LINKS.blog.to}
                            items={posts}
                            renderItem={this.renderItem}
                        />
                        : <h1>Loading...</h1>
                }
            </div>
        );
    }
}

const BlogWithRouter = withRouter(BlogContainer);
export const Blog = connect(
    (state: any) => ({...state.blog}),
    {
        loadBlog
    }
)(BlogWithRouter);
