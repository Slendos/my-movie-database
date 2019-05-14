import {
  FETCH_MEDIA,
  FETCH_SINGLE_MEDIA,
  FETCH_PERSON,
  FETCH_MOVIE,
  FETCH_TV
} from "../actions/types";

const initialState = {
  detail: [],
  week: {
    all: [],
    movie: [],
    tv: [],
    person: []
  },
  day: {
    all: [],
    movie: [],
    tv: [],
    person: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDIA:
      // [action.mediaType] {}

      return {
        ...state,
        [action.time]: {
          ...state[action.time],
          [action.mediaType]: action.payload
        }
      };

    // case FETCH_TV:
    //   return {
    //     ...state,
    //     tv: {
    //       ...state.tv,
    //       [action.mediaType]: action.payload
    //     }
    //   };

    // case FETCH_MOVIE:
    //   return {
    //     ...state,
    //     movie: {
    //       ...state.movie,
    //       [action.mediaType]: action.payload
    //     }
    //   };

    // case FETCH_PERSON:
    //   return {
    //     ...state,
    //     person: {
    //       ...state.person,
    //       [action.mediaType]: action.payload
    //     }
    //   };

    // case FETCH_SINGLE_MEDIA:
    //   return {
    //     ...state,
    //     datail: action.payload
    //   };
    // case NEW_POST:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    default:
      return state;
  }
};
