import { FETCH_MOVIE } from "../actions/types";

const initialState = {
  movie: {
    latest: [],
    popular: [],
    upcoming: [],
    now_playing: [],
    top_rated: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        movie: {
          ...state.movie,
          [action.mediaType]: action.payload
        }
      };
    default:
      return state;
  }
};
