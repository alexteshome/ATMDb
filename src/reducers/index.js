import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  movies: moviesReducer,
  error: errorReducer
});
