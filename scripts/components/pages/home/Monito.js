import React from "react";
import { ALink } from '../../blocks/Link';
import styles from "./Monito.less";

export const Monito = () => (
  <ALink
    href="https://www.monito.com"
  >
    <img
      className={styles.monitoLogo}
      src="https://www.monito.com/tawipages/images/monito-logo.svg"
      alt="Monito Logo"
    />
  </ALink>
);
