import * as ActionTypes from './actionTypes';

export const Detail = (state = { isLoading: true, errMess: null, movie: {} }, actions) => {
    switch (actions.type) {
        case ActionTypes.DETAIL_FAILED:
            return { ...state, isLoading: false, errMess: actions.payload, movie: {} };
        case ActionTypes.DETAIL_RECIEVED:
            return { ...state, isLoading: false, errMess: null, movie: actions.payload };
        default:
            return state;
    }

}