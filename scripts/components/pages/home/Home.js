import React from "react";
import styles from "./Home.less";

import { Monito } from "./Monito";

export const Home = () => (
  <>
    <h2>Hello, World! It&apos;s my laboratory.</h2>
    <div className={styles.avatar} />
    <div className={styles.intro}>
      <b>Igor Golopolosov.</b> Shipping software at <Monito />
    </div>
    <h4>Find out more details about me on:</h4>
  </>
);
