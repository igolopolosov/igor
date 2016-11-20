import React from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import { App } from './App';
import { Home } from './Home';
import { RandomBookLine } from './RandomBookLine';
import { NoMatch } from './NoMatch';

export class AppContainer extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/random-book-line" component={RandomBookLine}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
