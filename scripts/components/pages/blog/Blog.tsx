import { fromUnixTime, format } from "date-fns";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { BlogPost } from "../../../reducers/blog";
import { Pager } from "../../blocks/Pager";
import { Button } from "../../blocks/Button";
import { NAVIGATION_LINKS } from "../../../consts/navigation";
import { loadBlog } from "./loadBlog";

const styles = require("./Blog.less");

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

  export interface State {
    currentPostId?: number | string;
  }
}

const Post = (post: BlogPost) => {
  const milliseconds = parseInt(post.time, 10);
  const date = fromUnixTime(milliseconds);
  const formattedDate = format(date, "MMMM dd, yyyy");

  const [on, toggle] = (React as any).useState(false);
  const switchToggle = () => toggle(!on);

  return (
    <div className={styles.post}>
      <a className={styles.postHeader} onClick={switchToggle}>
        <span className={styles.title}>{post.title}</span>
        <span>{formattedDate}</span>
      </a>

      {on && (
        <div className={styles.postView}>
          <h3>{post.title}</h3>
          <h5>
            <span className={styles.tag}>{post.tag}</span>
          </h5>
          <h4>{formattedDate}</h4>
          <p>{post.text}</p>
          <Button onClick={switchToggle} secondary>
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

class BlogContainer extends React.PureComponent<
  BlogContainerNS.Props,
  BlogContainerNS.State
> {
  constructor(props) {
    super(props);

    this.props.loadBlog();
  }

  public render() {
    const { posts } = this.props;
    console.log();

    return (
      <div className={styles.container}>
        {posts && posts.length > 0 ? (
          <Pager
            limit={3}
            pathName={NAVIGATION_LINKS.blog.to}
            items={posts}
            Item={Post}
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

const BlogWithRouter = withRouter(BlogContainer);
export const Blog = connect(
  (state: any) => ({ ...state.blog }),
  {
    loadBlog
  }
)(BlogWithRouter);
