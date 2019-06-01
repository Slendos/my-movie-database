import {
  API_KEY,
  FETCH_MOVIE,
  FETCH_PERSON,
  FETCH_TV,
  FETCH_PERSON_DETAILS
} from "./types";

export const fetchMovie = type => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(media =>
      dispatch({
        type: FETCH_MOVIE,
        payload: media,
        mediaType: type
      })
    );
};

export const fetchTv = type => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/tv/${type}?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(media =>
      dispatch({
        type: FETCH_TV,
        payload: media,
        mediaType: type
      })
    );
};

export const fetchPerson = type => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/person/${type}?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(media =>
      dispatch({
        type: FETCH_PERSON,
        payload: media,
        mediaType: type
      })
    );
};

export const fetchPersonDetails = (id, type) => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/person/${id}/${type}?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(person =>
      dispatch({
        type: FETCH_PERSON_DETAILS,
        payload: person,
        personDetailType: type
      })
    );
};
