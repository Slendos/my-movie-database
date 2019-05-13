import React, { useRef, useEffect } from "react";
import Swiper from "react-id-swiper";
// Need to add Pagination, Navigation modules
import { Navigation } from "swiper/dist/js/swiper.esm";
import "./mySwiper.css";
import MediaCard from "../MediaCard/MediaCard";

const MySwiper = ({ movies, genres, imgPath, type, slides = 8, movieId }) => {
  const getNumberOfSlides = number => {
    console.log("NUMBER", number);
    if (!number) return 1;
    if (number.length < 8) return number.length;
    else return 8;
  };

  const params = {
    slidesPerView: getNumberOfSlides(movies),
    shouldSwiperUpdate: true,
    rebuildOnUpdate: true,
    observer: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 20
  };
  console.log("GENRES!!", genres, movies);
  return (
    <Swiper {...params}>
      {movies &&
        movies.map(movie => (
          <div className="movie-div" key={movie.id}>
            <MediaCard
              movie={movie}
              genres={genres}
              imgPath={imgPath}
              type={type}
              movieId={movieId}
            />
          </div>
        ))}
    </Swiper>
  );
};
export default MySwiper;
