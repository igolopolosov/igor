import * as React from 'react'
import { Route, Switch } from 'react-router'

import { Pane } from './tabs/Pane';
import { Tabs } from './tabs/Tabs';
import { DaysFromJune13 } from './DaysFromJune13';
import { PredictionBook } from './PredictionBook';
import { CircleCanon } from './CircleCanon';

export function Playground() {
    return (
        <>
            <Tabs>
                <Pane label="Circle Canon" url="circle-canon" />
                <Pane label="Prediction Book" url="prediction-book" />
                <Pane label="Days from June 13" url="days-from-june-13" />                
            </Tabs>

            <Switch>
                <Route path="/playground/circle-canon" component={CircleCanon} />
                <Route path="/playground/prediction-book" component={PredictionBook} />
                <Route path="/playground/days-from-june-13" component={DaysFromJune13} />
            </Switch>
        </>        
    );
}
