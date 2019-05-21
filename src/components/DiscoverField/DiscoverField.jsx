import React, { Component, Fragment } from "react";
import MediaCard from "../MediaCard/MediaCard";
import { Pagination } from "antd";
import "./discoverField.css";
import "antd/dist/antd.css";
// const imgUrl = "https://image.tmdb.org/t/p/w200";
class DiscoverField extends Component {
  render() {
    const {
      handleChange,
      handlePaginate,
      handleSubmit,
      text,
      search
    } = this.props;
    return (
      <Fragment>
        <div className="discover-form-wrapper">
          <form className="discover-form" onSubmit={handleSubmit}>
            <input
              className="discover-input"
              type="text"
              onChange={e => handleChange(e)}
              value={text}
            />

            <button className="discover-btn" type="submit">
              {" "}
              <i
                className="fas fa-search"
                style={{ color: "black", fontSize: "1.5vh" }}
              />
            </button>
          </form>
        </div>
        <div className="discover-cards-wrapper">
          {search.results &&
            search.results.map(movie => (
              <div className="discover-movie-item" key={movie.id}>
                <div
                  style={{
                    position: "relative",
                    width: "15vh",
                    paddinLeft: "15vh"
                  }}
                >
                  <MediaCard
                    movie={movie}
                    imgPath="poster_path"
                    type="movie"
                    movieId={movie.id}
                  />
                </div>
              </div>
            ))}
        </div>
        {search.total_pages > 1 && (
          <div style={{ marginBottom: "5vh" }}>
            <Pagination
              onChange={(page, pageSize) => handlePaginate(page, pageSize)}
              total={search.total_pages * 10}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default DiscoverField;
