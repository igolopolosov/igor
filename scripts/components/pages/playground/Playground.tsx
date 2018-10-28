import * as React from 'react'
import { Route, Switch } from 'react-router'

import { NAVIGATION_LINKS } from '../../../consts/navigation'
import { Pane } from './tabs/Pane';
import { Tabs } from './tabs/Tabs';
import { DaysFromJune13 } from './DaysFromJune13';
import { PredictionBook } from './PredictionBook';
import { CircleCanon } from './CircleCanon';

const {
    playground: {
        circleCanon,
        predictionBook,
        daysFromJune13
    }
} = NAVIGATION_LINKS;

export function Playground() {
    return (
        <>
            <Tabs>
                <Pane label={circleCanon.title} url={circleCanon.to} />
                <Pane label={predictionBook.title} url={predictionBook.to} />
                <Pane label={daysFromJune13.title} url={daysFromJune13.to} />                
            </Tabs>

            <Switch>
                <Route path={circleCanon.to} component={CircleCanon} />
                <Route path={predictionBook.to} component={PredictionBook} />
                <Route path={daysFromJune13.to} component={DaysFromJune13} />
            </Switch>
        </>        
    );
}
