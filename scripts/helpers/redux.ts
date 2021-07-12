import { AnyAction } from "redux";

export interface ActionWithPayload<T = any> extends AnyAction {
  type: string;
  payload: T;
}

interface ActionCreator<P> {
  (payload: P): ActionWithPayload<P>;
  type: string;
}

export function getActionCreator<P>(type: string): ActionCreator<P> {
  const actionCreator = (payload: P): ActionWithPayload<P> => ({
    type,
    payload,
  });

  actionCreator.type = type;

  return actionCreator;
}
