import React from "react";
import { ALink } from '../../blocks/Link';
import styles from "./Kaluza.less";

export const Kaluza = () => {
  console.log(document.body.classList.contains("light"))
  return <ALink
    href="https://www.kaluza.com"
  >
    <img
      className={styles.kaluzaLogo}
      src="https://www.kaluza.com/wp-content/uploads/2021/08/kaluza-hexagon_4x.png"
      alt="Kaluza Logo"
    />
    KALUZA
  </ALink>
};
