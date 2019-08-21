import * as React from 'react'
import { Route, Switch } from 'react-router'

import { NAVIGATION_LINKS } from '../../../consts/navigation'
import { Pane } from './tabs/Pane';
import { Tabs } from './tabs/Tabs';
import { DaysFromJune13 } from './DaysFromJune13';
import { PredictionBook } from './PredictionBook';
import { CircleCanon } from './CircleCanon';
import { WordReminder } from './WordReminder';

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
    [wordReminder, WordReminder],
]

export function Playground() {
    return (
        <>
            <Tabs>
                {tabs.map(
                    ([link]) => (
                        <Pane key={link.title} label={link.title} url={link.to} />
                    )
                )}
            </Tabs>

            <Switch>
                {tabs.map(
                    ([link, component]) => (
                        <Route key={link.title} path={link.to} component={component} />
                    )
                )}
            </Switch>
        </>
    );
}
