import {
  API_KEY,
  FETCH_SINGLE_MEDIA,
  FETCH_TV_CREDITS,
  CLEAN_TV_DETAILS,
  FETCH_TV_EPISODES,
  FETCH_MOVIE_CREDITS,
  CLEAN_DETAILS
} from "./types";

export const fetchSingleMedia = (type, id) => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_SINGLE_MEDIA,
        payload: data
      })
    );
};

export const fetchTvDetails = (id, type) => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/tv/${id}/${type}?api_key=${API_KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({ type: FETCH_TV_CREDITS, payload: data, tvDetailType: type })
    );
};

export const fetchMovieDetails = (id, type) => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/${type}?api_key=${API_KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIE_CREDITS,
        payload: data,
        movieDetailType: type
      })
    );
};

// export const fetchTvEpisodes = id => dispatch => {
//   console.log("fetching tv", id);
//   fetch(
//     `https://api.themoviedb.org/3/tv/episode_group/${id}?api_key=${API_KEY}&language=en-US`
//   )
//     .then(res => res.json())
//     .then(data => dispatch({ type: FETCH_TV_EPISODES, payload: data }));
// };

// export const fetchTvSeasons = id => dispatch => {
//   console.log("fetching tv", id);
//   fetch(
//     `https://api.themoviedb.org/3/tv/seasons/${id}?api_key=${API_KEY}&language=en-US`
//   )
//     .then(res => res.json())
//     .then(data => dispatch({ type: FETCH_TV_EPISODES, payload: data }));
// };

export const cleanDetails = () => dispatch => {
  dispatch({ type: CLEAN_DETAILS });
};

export const cleanTvDetails = () => dispatch => {
  dispatch({ type: CLEAN_TV_DETAILS, payload: null });
};
