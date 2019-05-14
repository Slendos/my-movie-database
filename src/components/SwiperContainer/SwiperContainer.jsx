import React, { Component, Fragment } from "react";
import MySwiper from "../MySwiper/MySwiper";
import { Transition } from "react-spring/renderprops";
import LazyLoad from "react-lazyload";
import "./swiperContainer.css";
import { lazyload } from "react-lazyload";
const SwiperContainer = ({ movie, genres, title, imgPath, type, movieId }) => {
  return (
    <div className="swiper">
      <div className="swiper-main">
        <span className="swiper-title">{title}</span>
        <MySwiper
          movies={movie}
          genres={genres}
          imgPath={imgPath}
          type={type}
          movieId={movieId}
        />
      </div>
      <div style={{ marginTop: "10vh" }}>
        <span className="border-line" />
      </div>
    </div>
  );
};

export default SwiperContainer;
