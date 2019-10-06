import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise";
import { rootReducer } from "./reducers";

export const configureStore = () => {
  let middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares = [...middlewares, createLogger({})];
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};
