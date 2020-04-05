import React from "react";
import { Navigation } from "./blocks/Navigation";
import { NAVIGATION_LINKS } from "../consts/navigation";
import styles from "./Main.less";

const projectLinks = [
  NAVIGATION_LINKS.home,
  NAVIGATION_LINKS.blog,
  NAVIGATION_LINKS.playground,
  NAVIGATION_LINKS.music,
  NAVIGATION_LINKS.appearences,
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation links={projectLinks} />
    </header>
  );
};
