import { combineReducers } from "redux";
import mediaReducer from "./mediaReducer";
import genresReducer from "./genresReducer";
import mediaDetailReducer from "./mediaDetailReducer";
import movieReducer from "./movieReducer";
import tvReducer from "./tvReducer";
import personReducer from "./personReducer";

export default combineReducers({
  // posts: postReducer
  media: mediaReducer,
  genres: genresReducer,
  person: personReducer,
  tv: tvReducer,
  movie: movieReducer,
  mediaDetail: mediaDetailReducer
});
