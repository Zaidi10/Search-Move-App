import * as ActionTypes from "./actionTypes";


export const fetchMovies = (search = null, type = null) => (dispatch) => {
    console.log("inside fetchmovies")
    console.log(search);
    console.log(type);
    dispatch(MoviesLoading(true));
    if (search === null) {


        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1f5816c0&s=batman")
            .then((success) => (success.json()))
            .then((movies) => {
                if (movies.Response === "False") {

                    dispatch(MoviesFailed(movies.Error));
                    return;
                }
                if (movies.Search === undefined) {
                    dispatch(MoviesFailed("Movie not Found!"));
                    return;
                }
                dispatch(MoviesRecieved(movies));
            })
            .catch((error) => { dispatch(MoviesFailed(error.message)) });
    }
    else {
        if (type === "title") {



            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1f5816c0&s=${search}`)
                .then((success) => (success.json()))
                .then((movies) => {
                    if (movies.Response === "False") {

                        dispatch(MoviesFailed(movies.Error));
                        return;
                    }
                    if (movies.Search === undefined) {
                        dispatch(MoviesFailed("Movie not Found!"));
                        return;
                    }

                    dispatch(MoviesRecieved(movies));
                })
                .catch((error) => {
                    dispatch(MoviesFailed(error.message))
                });
        }
        else if (type === "year") {
            let arr = search.split(" ");


            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1f5816c0&s=${arr[0]}&y=${arr[1]}`)
                .then((success) => (success.json()))
                .then((movies) => {
                    if (movies.Response === "False") {
                        dispatch(MoviesFailed(movies.Error));
                        return;
                    }
                    if (movies.Search === undefined) {
                        dispatch(MoviesFailed("Movie not Found!"));
                        return;
                    }

                    dispatch(MoviesRecieved(movies));
                })
                .catch((error) => { dispatch(MoviesFailed(error.message)) });
        }
        else {

            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1f5816c0&s=${search}&type=${type}`)
                .then((success) => (success.json()))
                .then((movies) => {
                    if (movies.Response === "False") {
                        dispatch(MoviesFailed(movies.Error));
                        return;
                    }
                    if (movies.Search === undefined) {
                        dispatch(MoviesFailed("Movie not Found!"));
                        return;
                    }

                    dispatch(MoviesRecieved(movies));
                })
                .catch((error) => { dispatch(MoviesFailed(error.message)) });
        }

    }

}

export const MoviesLoading = () => ({
    type: ActionTypes.MOVIES_LOADING,
});
export const MoviesFailed = (errMess) => ({
    type: ActionTypes.MOVIES_FAILED,
    payload: errMess
});
export const MoviesRecieved = (movies) => ({
    type: ActionTypes.MOVIES_RECIEVED,
    payload: movies
});

export const fetchFavorites = () => (dispatch) => {
    let favorites = localStorage.getItem("Favorites");;
    let favId = localStorage.getItem("FavId");
    if (favorites) {
        let fav = {
            favorites: JSON.parse(favorites),
            favId: JSON.parse(favId)
        }
        console.log("fav is", fav)
        dispatch(SetFavorites(fav));
    }


}

export const SetFavorites = (favorites) => ({
    type: ActionTypes.SET_FAVORITES,
    payload: favorites
});

export const AddFavorites = (favorite) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorite
});
export const RemoveFavorites = (favorite) => ({
    type: ActionTypes.REMOVE_FAVORITES,
    payload: favorite
});


export const fetchDetails = (title) => (dispatch) => {



    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1f5816c0&t=${title}`)
        .then((success) => (success.json()))
        .then((movies) => {
            console.log("inside fetch");
            console.log(movies);
            if (movies.Response === "False") {
                dispatch(DetailsFailed(movies.Error));
                return;
            }

            dispatch(DetailsRecieved(movies));
        })
        .catch((error) => { dispatch(DetailsFailed(error.message)) });


}

export const DetailsFailed = (errMess) => ({
    type: ActionTypes.DETAIL_FAILED,
    payload: errMess
});
export const DetailsRecieved = (movie) => ({
    type: ActionTypes.DETAIL_RECIEVED,
    payload: movie
});