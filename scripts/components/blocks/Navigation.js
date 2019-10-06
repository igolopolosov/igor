import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Navigation.less";

/**
 * Main navigation component
 * Can show internal and external links
 */
export class Navigation extends React.PureComponent {
  renderLink = link => {
    const { external } = this.props;
    return external ? (
      <a target="_blank" rel="noopener noreferrer" key={link.to} href={link.to}>
        {`- ${link.title} -`}
      </a>
    ) : (
      <Link key={link.to} to={link.to}>
        {link.title}
      </Link>
    );
  };

  render() {
    const { links = [] } = this.props;
    return <div className={styles.container}>{links.map(this.renderLink)}</div>;
  }
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string
    })
  ),
  external: PropTypes.bool
};
