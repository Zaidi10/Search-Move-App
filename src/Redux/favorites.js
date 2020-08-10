import * as ActionTypes from './actionTypes';

export const Favorites = (state = { favorites: [], favId: [] }, actions) => {
    switch (actions.type) {
        case ActionTypes.SET_FAVORITES:
            return { ...state, favorites: actions.payload.favorites, favId: actions.payload.favId };


        case ActionTypes.ADD_FAVORITES:
            let favortiesCopy1 = state.favorites.concat(actions.payload)
            let favIdCopy1 = state.favId.concat(actions.payload.imdbID)
            localStorage.setItem("Favorites", JSON.stringify(favortiesCopy1));
            localStorage.setItem("FavId", JSON.stringify(favIdCopy1));
            return { ...state, favorites: state.favorites.concat(actions.payload), favId: state.favId.concat(actions.payload.imdbID) };


        case ActionTypes.REMOVE_FAVORITES:
            let index = state.favId.indexOf(actions.payload.imdbID);
            let favortiesCopy = [...state.favorites]
            let favIdCopy = [...state.favId]
            favortiesCopy.splice(index, 1);
            favIdCopy.splice(index, 1);
            localStorage.setItem("Favorites", JSON.stringify(favortiesCopy));
            localStorage.setItem("FavId", JSON.stringify(favIdCopy));

            return { ...state, favorites: favortiesCopy, favId: favIdCopy };

        default:
            return state;
    }

}