import * as actions from '../actionTypes';
const initState = {
    login: false
}

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.LOGIN_IN:
            return {...state, login: true };
        case actions.LOGIN_OUT:
            return {...state, login: false };
        default:
            return {...state };
    }
}