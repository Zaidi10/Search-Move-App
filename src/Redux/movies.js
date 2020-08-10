import * as ActionTypes from './actionTypes';

export const Movies = (state = { isLoading: true, errMess: null, movies: {} }, actions) => {
    switch (actions.type) {
        case ActionTypes.MOVIES_LOADING:
            return { ...state, isLoading: true, errMess: null, movies: {} };
        case ActionTypes.MOVIES_FAILED:
            return { ...state, isLoading: false, errMess: actions.payload, movies: {} };
        case ActionTypes.MOVIES_RECIEVED:
            return { ...state, isLoading: false, errMess: null, movies: actions.payload };
        default:
            return state;
    }

}