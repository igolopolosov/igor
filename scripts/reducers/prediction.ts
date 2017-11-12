import { AnyAction } from 'redux';
import { getActionCreator } from '../helpers/redux';

export const setPages = getActionCreator('SET_PAGES');
export const setLines = getActionCreator('SET_LINES');

export const prediction = (state = {pages: '', lines: ''}, action: AnyAction) => {
    switch (action.type) {
        case setPages.type:
            return {...state, pages: action.amount};
        case setLines.type:
            return {...state, lines: action.amount};
        default:
            return state;
    }
};
