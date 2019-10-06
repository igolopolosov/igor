import { AnyAction } from "redux";

export interface ActionWithPayload<T = any> extends AnyAction {
  type: string;
  payload: T;
}

interface ActionCreator<T> {
  (payload: T): ActionWithPayload<T>;
  type: string;
}

export function getActionCreator<T>(type: string): ActionCreator<T> {
  const actionCreator = (payload: T): ActionWithPayload<T> => ({
    type,
    payload
  });

  (<ActionCreator<T>>actionCreator).type = type;

  return <ActionCreator<T>>actionCreator;
}
