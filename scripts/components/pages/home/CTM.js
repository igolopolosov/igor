import React from "react";
import styles from "./CTM.less";

import { ALink } from '../../blocks/ALink';

export const CTM = () => (
  <ALink
    href="https://www.comparethemarket.com"
  >
    <img
      className={styles.companyLogo}
      src="https://cdn.comparethemarket.com/market/assets/logos/favicon.ico"
      alt="CTM Logo"
    />
    <b>compare</b>the<b>market</b>
  </ALink>
);
