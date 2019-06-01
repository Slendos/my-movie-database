import { combineReducers } from "redux";
import genresReducer from "./genresReducer";
import mediaDetailReducer from "./mediaDetailReducer";
import movieReducer from "./movieReducer";
import tvReducer from "./tvReducer";
import personReducer from "./personReducer";

export default combineReducers({
  genres: genresReducer,
  person: personReducer,
  tv: tvReducer,
  movie: movieReducer,
  mediaDetail: mediaDetailReducer
});
