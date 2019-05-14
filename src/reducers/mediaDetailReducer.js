import {
  FETCH_SINGLE_MEDIA,
  FETCH_TV_CREDITS,
  CLEAN_TV_DETAILS,
  FETCH_TV_EPISODES,
  FETCH_MOVIE_CREDITS,
  FETCH_PERSON_DETAILS
} from "../actions/types";

const initialState = {
  detail: [],
  tv: {
    credits: [],
    videos: [],
    similar: [],
    reviews: [],
    recommendations: [],
    episode_groups: []
  },

  movie: {
    credits: [],
    similar: [],
    reviews: [],
    videos: []
  },

  personDetails: {
    tv_credits: [],
    movie_credits: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_MEDIA:
      return {
        ...state,
        detail: action.payload
      };

    case FETCH_TV_CREDITS:
      return {
        ...state,
        tv: {
          ...state.tv,
          [action.tvDetailType]: action.payload
        }
      };

    case FETCH_TV_EPISODES:
      return {
        ...state,
        tv: {
          ...state.tv,
          episode_groups: action.payload
        }
      };

    case FETCH_MOVIE_CREDITS:
      return {
        ...state,
        movie: {
          ...state.movie,
          [action.movieDetailType]: action.payload
        }
      };

    case FETCH_PERSON_DETAILS:
      return {
        ...state,
        personDetails: {
          ...state.personDetails,
          [action.personDetailType]: action.payload
        }
      };

    case CLEAN_TV_DETAILS:
      return {
        ...state,
        tv: {
          credits: [],
          videos: [],
          similar: [],
          reviews: [],
          recommendations: [],
          episode_groups: []
        }
      };

    case CLEAN_TV_DETAILS:
      return {
        ...state,
        detail: [],
        tv: {
          credits: [],
          videos: [],
          similar: [],
          reviews: [],
          recommendations: [],
          episode_groups: []
        },

        movie: {
          credits: [],
          similar: [],
          reviews: [],
          videos: []
        },

        personDetails: {
          tv_credits: [],
          movie_credits: []
        }
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
