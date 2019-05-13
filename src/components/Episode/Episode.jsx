import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

import "./episode.css";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Episode = ({ data }) => {
  return (
    <Fade up>
      <div
        style={{
          // flex: "1 0 35%",
          // minHeight: "100%",
          margin: "2vh 3vh",
          border: "2px solid black",
          backgroundColor: "#20212b"
        }}
      >
        <PerfectScrollbar>
          <div className="episode-wrapper">
            <div>{console.log(data)}</div>
            <div className="episode-number">{data.episode_number}</div>
            <div>
              <img
                src={imgUrl + data.still_path}
                alt=""
                style={{ width: "25vh" }}
              />
            </div>
            <div className="episode-name">{data.name}</div>
            {data.vote_average && (
              <div className="episode-rating">
                <i className="fas fa-star" style={{ color: "red" }} />
                {" " + data.vote_average.toFixed(2)}
              </div>
            )}
            <div className="episode-overview">{data.overview}</div>
          </div>
        </PerfectScrollbar>
      </div>
    </Fade>
  );
};

export default Episode;
