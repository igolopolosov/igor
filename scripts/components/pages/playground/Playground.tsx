import * as React from "react";
import { Route, Switch } from "react-router";

import { NAVIGATION_LINKS } from "../../../consts/navigation";
import { ALink } from "../../blocks/ALink";
import { Pane } from "../../blocks/Pane";
import { Tabs } from "../../blocks/Tabs";
import { DaysFromJune13 } from "./DaysFromJune13";
import { PredictionBook } from "./PredictionBook";
import { CircleCanon } from "./CircleCanon";
import { WordReminder } from "./WordReminder";

const styles = require("./Playground.less");

const {
  circleCanon,
  predictionBook,
  daysFromJune13,
  wordReminder
} = NAVIGATION_LINKS.playground;

const tabs = [
  [circleCanon, CircleCanon],
  [predictionBook, PredictionBook],
  [daysFromJune13, DaysFromJune13],
  [wordReminder, WordReminder]
];

function PlaygroundIntro() {
  return (
    <div className={styles.playgroundIntro}>
      <p>Here I collect my mini projects that I developed 😀</p>
      <p>
        Please welcome under the hood to see how it's implemented on <ALink href='https://github.com/igolopolosov/igor'>My Github 🔥</ALink>
      </p>
      <br/>
    </div>
  );
}

function PlaygroundItem({ children }) {
  return (
    <>
      <hr className={styles.separator} />
      <div className={styles.playgroundItem}>
        {children}
      </div>
      <hr className={styles.separator} />
    </>
  );
}

export function Playground() {
  return (
    <>
      <div className={styles.playgroundHeadline}>
        <PlaygroundIntro />
        <Tabs>
          {tabs.map(([link]) => (
            <Pane key={link.title} label={link.title} url={link.to} />
          ))}
        </Tabs>
      </div>

      <PlaygroundItem>
        <Switch>
          {tabs.map(([link, component]) => (
            <Route key={link.title} path={link.to} component={component} />
          ))}
        </Switch>
      </PlaygroundItem>
    </>
  );
}
