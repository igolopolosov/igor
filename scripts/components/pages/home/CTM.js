import React from "react";
import styles from "./CTM.less";

export const CTM = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.comparethemarket.com"
  >
    <img
      className={styles.companyLogo}
      src="https://cdn.comparethemarket.com/market/assets/logos/favicon.ico"
      alt="CTM Logo"
    />
    <b>compare</b>
    the
    <b>market</b>
  </a>
);
