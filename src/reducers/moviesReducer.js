import { GET_MOVIES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        popMovies: action.payload.map(movie => {
          return {
            id: movie.id,
            original_title: movie.original_title,
            poster_path: movie.poster_path,
            overview: movie.overview,
            vote_average: movie.vote_average,
            release_date: movie.release_date
          };
        })
      };
    default:
      return state;
  }
}
