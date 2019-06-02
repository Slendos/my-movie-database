import { FETCH_GENRES, API_KEY } from "./types";

export const fetchGenres = () => async dispatch => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  let urlTv = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;
  let movieGenres;
  await fetch(url)
    .then(res => res.json())
    .then(genres => {
      movieGenres = genres;
      dispatch({
        type: FETCH_GENRES,
        payload: genres
      });
    });

  fetch(urlTv)
    .then(res => res.json())
    .then(genres => {
      const allGenres = {
        genres: genres && genres.genres.concat(movieGenres.genres)
      };
      dispatch({
        type: FETCH_GENRES,
        payload: allGenres
      });
    });
};
