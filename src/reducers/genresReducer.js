import { FETCH_GENRES } from "../actions/types";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        list: action.payload.genres
      };
    default:
      return state;
  }
};
