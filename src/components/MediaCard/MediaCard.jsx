import React, { Component, Fragment } from "react";
import LazyLoad from "react-lazyload";
import LazyImage from "../LazyImage/LazyImage";
import { Link } from "react-router-dom/cjs/react-router-dom";

const imagesUrl = "https://image.tmdb.org/t/p/original";
const imgUrlW500 = "https://image.tmdb.org/t/p/w200";
const MediaCard = ({ movie, genres, imgPath, type, movieId }) => {
  const getUrl = type => {
    if ((type = "tv")) {
      return "https://image.tmdb.org/t/p/w500";
    } else {
      return imgUrlW500;
    }
  };
  return (
    <Fragment>
      <LazyLoad height={150}>
        {type === "season" ? (
          <Link
            to={{
              pathname: `/tv/${movieId}/season/${movie.season_number}`,
              state: { data: movie, id: movieId }
            }}
            style={{ textDecoration: "none", color: "white" }}
            key={movie.id}
          >
            <LazyImage
              url={getUrl(type) + movie[imgPath]}
              data={movie}
              imgClass="movie-preview"
              genres={genres}
              imgPath={imgPath}
              type={type}
            />
          </Link>
        ) : (
          <Link
            to={{ pathname: `/${type}/${movie.id}`, state: { data: movie } }}
            style={{ textDecoration: "none", color: "white" }}
            key={movie.id}
          >
            <LazyImage
              url={getUrl(type) + movie[imgPath]}
              data={movie}
              imgClass="movie-preview"
              genres={genres}
              imgPath={imgPath}
              type={type}
            />
          </Link>
        )}
      </LazyLoad>
    </Fragment>
  );
};

export default MediaCard;
