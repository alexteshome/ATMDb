import { GET_MOVIES, GET_ERRORS } from "./types";

const fetchPopMovies = async () => {
  const API_Key = "6c741e9f6eef00067e5bc6af8c6b9e01";
  const movieListRaw = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  const movieList = movieListRaw.json();
  return movieList;
};

export const getMovies = API_Key => dispatch => {
  fetchPopMovies(API_Key)
    .then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.results
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};
