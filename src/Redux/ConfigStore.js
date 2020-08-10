import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Movies } from "./movies";
import { Favorites } from "./favorites"
import { Detail } from "./deatail"


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            movies: Movies,
            favorites: Favorites,
            detail: Detail

        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}