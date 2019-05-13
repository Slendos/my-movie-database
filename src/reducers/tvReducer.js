import { FETCH_TV } from "../actions/types";

const initialState = {
  tv: {
    airing_today: [],
    on_the_air: [],
    popular: [],
    top_rated: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV:
      return {
        ...state,
        tv: {
          ...state.tv,
          [action.mediaType]: action.payload
        }
      };
    default:
      return state;
  }
};
