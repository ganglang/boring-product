import * as actions from '../actionTypes';

let defaultState = {
    news: []
}

export const homeRedcer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.GET_NEWS:
            return {...state, news: action.news };
        default:
            return {...state }
    }
}