import { AnyAction } from "redux";
import { getActionCreator } from "../helpers/redux";

export const setPages = getActionCreator<number>("SET_PAGES");
export const setLines = getActionCreator<number>("SET_LINES");

export const prediction = (
  state = { pages: "", lines: "" },
  action: AnyAction
) => {
  switch (action.type) {
    case setPages.type:
      return { ...state, pages: action.payload };
    case setLines.type:
      return { ...state, lines: action.payload };
    default:
      return state;
  }
};
