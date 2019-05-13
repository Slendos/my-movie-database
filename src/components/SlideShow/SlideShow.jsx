import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./slideShow.css";
const imagesUrl = "https://image.tmdb.org/t/p/original";

const SlideShow = ({ data }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (index === data.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(counter);
    };
  }, [index]);

  const getImages = () => {
    let images = [];
    return data.map((movie, index) => {
      let imgUrl = imagesUrl + movie.backdrop_path;
      // let image = <img src={imgUrl} className="preview-image" />;
      let background = (
        <div
          className="preview-image"
          style={{
            position: "absolute",
            background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(${imgUrl}) center top no-repeat rgb(255, 255, 255)`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            zIndex: "1"
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "40vh",
              left: "20vh",
              zIndex: 500,
              textAlign: "left"
            }}
          >
            <span className="slideshow-title">
              <i>NOW PLAYING</i>
            </span>
          </div>
          <div className="preview-title">
            <div
              style={{
                textAlign: "left",
                width: "150px",
                height: "200px",
                display: "inline-block",
                float: "left",
                flexGrow: 1,
                flexShrink: 0
              }}
            >
              <img
                src={imagesUrl + data[index].poster_path}
                className="movie-preview"
                style={{
                  width: "150px",
                  height: "200px",
                  zIndex: 999
                }}
              />
            </div>
            <div
              className="description-main"
              style={{ display: "inline-block" }}
            >
              <span className="description-title">
                {data[index].title || data[index].original_name}
              </span>
              <br />
              <span className="description-rating" style={{ fontSize: "2vh" }}>
                <i className="fas fa-star" style={{ color: "red" }} />
                {" " + data[index].vote_average}
              </span>
              {/* <div style={{ display: "block" }}> */}
              <br />{" "}
              <span style={{ fontSize: "2vh" }}>{data[index].overview}</span>
              {/* </div> */}
            </div>
          </div>
        </div>
      );
      return background;
    });
  };

  let slides = getImages();
  // if (images[index] === undefined) return <div>Loading..</div>;
  //   const image = imagesUrl + current.backdrop_path;
  return (
    <React.Fragment>
      <TransitionGroup className="card-container">
        <CSSTransition
          key={index}
          timeout={3000}
          classNames="fade"
          // appear={true}
          // exit={true}
        >
          <div style={{ position: "absolute", width: "100%" }}>
            {slides[index]}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default SlideShow;
