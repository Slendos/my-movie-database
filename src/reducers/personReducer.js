import { FETCH_PERSON } from "../actions/types";

const initialState = {
  person: {
    latest: [],
    popular: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        ...state,
        person: {
          ...state.person,
          [action.mediaType]: action.payload
        }
      };
    default:
      return state;
  }
};
