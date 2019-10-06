import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router";
import styles from "./Pager.less";

const PAGE_SEPARATOR = "page=";

function extractPage(search) {
  return search.split(PAGE_SEPARATOR)[1];
}

/**
 * Used to control pages for list of items
 */
class PagerContainer extends React.PureComponent {
  static propTypes = {
    pathName: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.any),
    renderItem: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      limit: props.limit,
      page: parseInt(extractPage(this.props.location.search), 10) || 1
    };
  }

  /**
   * Handler for page changing
   * @param {number} page
   */
  onPageChange(page) {
    const { history, pathName } = this.props;

    history.push(`${pathName}?${PAGE_SEPARATOR}${page}`);

    this.setState({ page });
  }

  renderPageItem = pageItem => {
    const { page } = this.state;

    return (
      <span
        key={pageItem}
        onClick={this.onPageChange.bind(this, pageItem)}
        className={`${styles.item} ${page === pageItem && styles.itemActive}`}
      >
        {pageItem}
      </span>
    );
  };

  render() {
    const { limit, page } = this.state;
    const { items, Item } = this.props;

    const visiblePosts = (_, i) => i >= (page - 1) * limit && i < page * limit;
    const pages = [...Array(Math.ceil(items.length / limit))].map(
      (_, i) => i + 1
    );
    const visiblePages = pages.length > 1 ? pages : [];

    return (
      <React.Fragment>
        {items.filter(visiblePosts).map((props, index) => (
          <Item key={index} {...props} />
        ))}
        {visiblePages.map(this.renderPageItem)}
      </React.Fragment>
    );
  }
}

export const Pager = withRouter(PagerContainer);
