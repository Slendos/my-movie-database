import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./slideShow.css";
const imagesUrl = "https://image.tmdb.org/t/p/original";
const smallImage = "https://image.tmdb.org/t/p/w500";
const SlideShow = ({ data }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (index === data.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    }, 13000);
    return () => {
      clearInterval(counter);
    };
  }, [index]);

  const getBackgrounds = () => {
    return data.map((movie, index) => {
      let imgUrl = imagesUrl + movie.backdrop_path;
      let background = (
        <div
          className="preview-image slideshow-background"
          style={{
            background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(${imgUrl}) center top no-repeat rgb(255, 255, 255)`
          }}
        >
          <div className="preview-title">
            <div className="description-text">Now playing</div>
            <div className="flexblock-wrapper">
              <div className="description-title-wrapper">
                <img
                  src={smallImage + data[index].poster_path}
                  className="movie-preview"
                  alt={data[index].title || data[index].name}
                />
              </div>
              <div className="description-main">
                <span className="description-title">
                  {data[index].title || data[index].original_name}
                  <br />
                </span>
                <span
                  className="description-rating"
                  style={{ fontSize: "2vh" }}
                >
                  <i className="fas fa-star" style={{ color: "red" }} />
                  {" " + data[index].vote_average}
                  <br />
                </span>
                <div className="slideshow-overview">{data[index].overview}</div>
              </div>
            </div>
          </div>
        </div>
      );
      return background;
    });
  };
  let slides = getBackgrounds();
  return (
    <React.Fragment>
      <TransitionGroup className="card-container">
        <CSSTransition key={index} timeout={6000} classNames="slide">
          <div style={{ position: "absolute", width: "100%" }}>
            {slides[index]}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default SlideShow;
