import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";

import { configureStore } from "../configureStore";
import { Main } from "./Main";

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Main} />
    </HashRouter>
  </Provider>
);
