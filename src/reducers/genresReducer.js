import { FETCH_GENRES } from "../actions/types";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        list: action.payload.genres
      };
    // case NEW_POST:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    default:
      return state;
  }
};
