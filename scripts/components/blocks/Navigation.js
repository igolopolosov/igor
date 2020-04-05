import React from "react";
import PropTypes from "prop-types";

import styles from "./Navigation.less";
import { ALink } from './ALink';

/**
 * Main navigation component
 * Can show internal and external links
 */
export class Navigation extends React.PureComponent {
  renderLink = link => {
    const { external } = this.props;

    if (external) {
      return (
        <ALink key={link.to} href={link.to}>
          {`- ${link.title} -`}
        </ALink>
      );
    }

    return (
      <ALink key={link.to} to={link.to} internal>
        {link.title}
      </ALink>
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
