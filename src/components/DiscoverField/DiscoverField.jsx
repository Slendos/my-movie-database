import React, { Component, Fragment } from "react";
import { API_KEY } from "../../actions/types";
import MediaCard from "../MediaCard/MediaCard";
import { Pagination } from "antd";
import "./discoverField.css";
import "antd/dist/antd.css";
const imgUrl = "https://image.tmdb.org/t/p/original";
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

            <button className="discover-btn" type="submit" />
          </form>
        </div>
        <div
          style={{
            minHeight: "100vh",
            width: "80%",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px"
          }}
        >
          {search.results &&
            search.results.map(movie => (
              <div style={{ flex: "1 0 20%", marginBottom: "4vh" }}>
                <div>
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
