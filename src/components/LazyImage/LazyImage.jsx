import React, { useState, Fragment } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./lazyimage.css";
import image from "../../images/blank_profile.png";
import { Link } from "react-router-dom";
import genresReducer from "../../reducers/genresReducer";
import Rating from "../Rating/Rating";
import MediaTitle from "../MediaTitle/MediaTitle";
import MediaAirDate from "../MediaAirDate/MediaAirDate";
import MediaCharacter from "../MediaCharacter/MediaCharacter";

const LazyImage = ({ url, imgClass, data, genres, imgPath, type }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // if (error) return <div>Error</div>;

  const getGenres = (ids, genres) => {
    let finished = false;
    return ids.map((id, index) => {
      if (finished) return;
      if (index >= 1) {
        finished = true;
      }
      let r = genres.filter(genre => genre.id === id);
      return (
        <span className="movie-genre" key={index}>
          {r[0] && r[0].name}{" "}
          {index === ids.length - 1 || finished ? " " : "| "}
        </span>
      );
    });
  };

  return (
    <React.Fragment>
      {!error && (
        <img
          src={!error ? url : "../../images/blank_profile.png"}
          alt="image"
          className={loading ? imgClass : "loadingImg"}
          onLoad={() => setLoading(true)}
          onError={() => {
            setError(true);
            setLoading(true);
          }}
        />
      )}
      {error && (
        <img
          src={image}
          className={imgClass}
          style={{ height: "2.5vh", width: "15vh" }}
        />
      )}
      {!loading && <LoadingSpinner />}
      <br />
      {loading && data.vote_average && <Rating rating={data.vote_average} />}
      {loading && <MediaTitle title={data.title || data.name} />}
      {loading && data.character && (
        <MediaCharacter character={data.character} />
      )}
      {loading && data.air_date && <MediaAirDate date={data.air_date} />}
      {loading && genres && (
        <div className="movie-genres"> {getGenres(data.genre_ids, genres)}</div>
      )}
    </React.Fragment>
  );
};

export default LazyImage;
