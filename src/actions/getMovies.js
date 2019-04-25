import { GET_MOVIES, GET_ERRORS } from "./types";

const fetchPopMovies = async API_Key => {
  //ENTER YOUR API KEY HERE:
  //const API_Key =
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
