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
     * Render blog post
     */
    private renderItem = (post: BlogPost) => {
        const date = parse(post.time * 1000);
        const formattedDate = format(date, 'MMMM DD, YYYY');

        return (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <h3>
                    <span className={styles.tag}>{post.tag}</span>
                    <span>{formattedDate}</span>
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
                {
                    posts && posts.length > 0
                        ? <Pager
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
