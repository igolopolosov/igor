import * as React from 'react';
import { Pane } from '../_blocks/tabs/Pane';
import { Tabs } from '../_blocks/tabs/Tabs';
import { DaysFromJune13 } from './DaysFromJune13';
import { PredictionBook } from './PredictionBook';
import { CircleCanon } from './CircleCanon';

export function Playground() {
    return (
        <Tabs>
            <Pane label="Circle Canon">
                <CircleCanon />
            </Pane>

            <Pane label="Prediction Book">
                <PredictionBook />
            </Pane>

            <Pane label="Days from June 13">
                <DaysFromJune13 />
            </Pane>            
        </Tabs>
    );
}
