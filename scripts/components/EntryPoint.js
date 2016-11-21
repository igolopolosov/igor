import React from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import { App } from './App';
import { Home } from './Home';
import { PredictionBook } from './PredictionBook';
import { NoMatch } from './NoMatch';

export class EntryPoint extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/prediction-book" component={PredictionBook}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
