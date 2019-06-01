import React from "react";
import Swiper from "react-id-swiper";
import { Navigation } from "swiper/dist/js/swiper.esm";
import "./mySwiper.css";
import MediaCard from "../MediaCard/MediaCard";

const MySwiper = ({ movies, genres, imgPath, type, slides = 8, movieId }) => {
  const getNumberOfSlides = number => {
    if (!number) return 1;
    if (number.length < 8) return number.length;
    else return 8;
  };

  const myBreakPoints = {
    320: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
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
  };
  const params = {
    slidesPerView: 8,
    shouldSwiperUpdate: true,
    rebuildOnUpdate: true,
    observer: true,
    breakpoints: myBreakPoints,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 20
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
