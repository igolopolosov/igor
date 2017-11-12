import { AnyAction } from 'redux';

interface Action<T = any> extends AnyAction {
    type: string;
    payload: T;
}

interface ActionCreator<T> {
    (payload: T): Action<T>;
    type: string;
}

export function getActionCreator<T>(type: string): ActionCreator<T> {
    const actionCreator = (payload: T): Action<T> => ({
        type,
        payload
    });

    (<ActionCreator<T>>actionCreator).type = type;

    return <ActionCreator<T>>actionCreator;
}
