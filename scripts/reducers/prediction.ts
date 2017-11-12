import { AnyAction } from 'redux';

export const setPages = (amount: number): AnyAction => ({type: 'SET_PAGES', amount});
export const setLines = (amount: number): AnyAction => ({type: 'SET_LINES', amount});

export const prediction = (state = {pages: '', lines: ''}, action: AnyAction) => {
    switch (action.type) {
        case 'SET_PAGES':
            return {...state, pages: action.amount};
        case 'SET_LINES':
            return {...state, lines: action.amount};
        default:
            return state;
    }
};
