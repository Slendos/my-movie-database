import React, { useRef, useEffect } from "react";
import Swiper from "react-id-swiper";
// Need to add Pagination, Navigation modules
import { Navigation } from "swiper/dist/js/swiper.esm";
import "./mySwiper.css";
import MediaCard from "../MediaCard/MediaCard";

const MySwiper = ({ movies, genres, imgPath, type, slides = 8, movieId }) => {
  const getNumberOfSlides = number => {
    if (!number) return 1;
    if (number.length < 8) return number.length;
    else return 8;
  };

  const params = {
    slidesPerView: getNumberOfSlides(movies),
    shouldSwiperUpdate: true,
    rebuildOnUpdate: true,
    observer: true,
    breakpoints: {
      // when window width is <= 320px

      320: {
        slidesPerView: 1
      },
      // when window width is <= 480px
      500: {
        slidesPerView: 2
      },
      // when window width is <= 640px
      700: {
        slidesPerView: 3
      },
      900: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 5
      },
      1500: {
        slidesPerView: 6
      },
      1700: {
        slidesPerView: 7
      }
    },
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 0
  };
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
