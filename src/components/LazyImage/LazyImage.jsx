import React, { useState, Fragment } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./lazyimage.css";
import image from "../../images/blank_profile.png";
import { Link } from "react-router-dom";
import genresReducer from "../../reducers/genresReducer";
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
      console.log(r);
      return (
        <span className="movie-genre" key={index}>
          {r[0] && r[0].name}{" "}
          {index === ids.length - 1 || finished ? " " : "| "}
        </span>
      );
    });
  };
  console.log("IMG PATH", imgPath);
  console.log("hovno!!!!", data);
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
          style={{ height: "171px", width: "114px" }}
        />
      )}
      {!loading && <LoadingSpinner />}
      <br />
      {loading && data.vote_average && (
        <span style={{ fontWeight: "bold" }}>
          {" "}
          <i className="fas fa-star" style={{ color: "red" }} />
          {" " + data.vote_average}
          <br />
        </span>
      )}
      {loading && <span>{data.title || data.name}</span>}
      {loading && data.character && (
        <Fragment>
          <br />
          <span>
            <i> as {data.character}</i>
          </span>
        </Fragment>
      )}
      {loading && data.air_date && (
        <Fragment>
          <br />
          <span>{data.air_date}</span>
        </Fragment>
      )}
      {loading && genres && (
        <div className="movie-genres"> {getGenres(data.genre_ids, genres)}</div>
      )}
    </React.Fragment>
  );
};

export default LazyImage;
