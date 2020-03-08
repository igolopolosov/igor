import { combineReducers } from "redux";
import { blog } from "./blog.ts";
import { prediction } from "./prediction.ts";

export const rootReducer = combineReducers({
  prediction,
  blog
});
