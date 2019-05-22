import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./mediaExtend.css";
const imgUrl = "https://image.tmdb.org/t/p/original";
const smallUrl = "https://image.tmdb.org/t/p/w200";
class MediaExtend extends Component {
  state = {
    loading: true
  };

  getGenres = (ids, genres, data, type) => {
    let finished = false;
    if (type === "movie")
      return data.genres.map((genre, index) => {
        if (finished) return;
        if (index >= 1) {
          finished = true;
        }
        return (
          <span className="movie-genre" key={index}>
            {genre.name + " "}
            {index === genre.length - 1 || finished ? " " : "| "}
          </span>
        );
      });
    else if (type === "tv") {
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
    }
  };
  renderBackground = (data, genres, type) => {
    return (
      <TransitionGroup
        className="card-container"
        style={{ width: "100%", height: "100vh" }}
      >
        <CSSTransition
          appear={true}
          exit={true}
          classNames="fade"
          key={data.id}
          timeout={3000}
        >
          <div style={{ position: "absolute", width: "100%", height: "91vh" }}>
            <div
              className="cover"
              style={{
                background: `linear-gradient(0deg, rgb(0, 0, 0, 0.98) 30%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(${imgUrl +
                  data.backdrop_path}) center top no-repeat rgb(255, 255, 255)`,
                display: this.state.loading && "none"
              }}
              onLoad={() => this.setState({ loading: false })}
            >
              {data.runtime && (
                <div className="preview-runtime">{data.runtime} min</div>
              )}
              <div className="preview-title-extend">
                <div className="preview-image">
                  <img
                    src={smallUrl + data.poster_path}
                    alt=""
                    className="movie-preview"
                  />
                </div>
                <div className="description-extend-main">
                  <span className="description-title-name">
                    {data.title || data.name}
                  </span>
                  <div>
                    <span className="description-release">
                      <span className="description-extend-rating">
                        Rating:{" "}
                        <i className="fas fa-star" style={{ color: "red" }} />
                        {" " + data.vote_average}
                      </span>
                      <br />
                      {(type === "tv" || data.genres) &&
                        this.getGenres(data.genre_ids, genres, data, type)}{" "}
                      <br />
                      {data.original_language}
                      <br />
                      {<i className="extend-tag-line">{data.tagline}</i>}
                    </span>
                  </div>
                </div>
                <div className="tv-overview" style={{ overflow: "auto" }}>
                  {data.overview}
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  renderOverview(overview) {
    return (
      <Fragment>
        <div style={{ textAlign: "left", fontSize: "4vh" }}>Overview</div>{" "}
      </Fragment>
    );
  }

  renderVideo(video) {
    return (
      <div key={video.results[0] && video.results[0].id}>
        {video.results && video.results[0] && (
          <div style={{ height: "40vh" }}>
            <iframe
              title="trailer"
              frameBorder="0"
              style={{ height: "40vh" }}
              width="800"
              src={`https://www.youtube.com/embed/${video.results[0].key}`}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MediaExtend;
