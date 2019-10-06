import { combineReducers } from "redux";
import { blog } from "./blog";
import { prediction } from "./prediction";

export const rootReducer = combineReducers({
  prediction,
  blog
});
