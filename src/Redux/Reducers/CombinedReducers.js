import { combineReducers } from "redux";
import { LoaderReducer } from "./LoaderReducer";
import { FavoritesReducer } from "./FavoritesReducer";
import { getMoviesReducer } from "./getMoviesReducer";


export default combineReducers({
    myLoader: LoaderReducer,
    myFavorites: FavoritesReducer,
    myMovies: getMoviesReducer
})