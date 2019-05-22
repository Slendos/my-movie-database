import React from "react";
import Fade from "react-reveal/Fade";
const MediaNavigation = ({ handleSwitch, media }) => {
  return (
    <Fade up>
      <div className="navigation-main">
        <div
          onClick={() => handleSwitch("all")}
          key="all"
          className={`navigation-div ${"all" === media && "active"}`}
        >
          <span>All</span>
        </div>
        <div
          className={`navigation-div ${"tv" === media && "active"}`}
          onClick={() => handleSwitch("tv")}
          key="tv"
        >
          <span>TV</span>
        </div>
        <div
          className={`navigation-div ${"movie" === media && "active"}`}
          onClick={() => handleSwitch("movie")}
          key="movie"
        >
          <span>Movie</span>
        </div>
        <div
          className={`navigation-div ${"person" === media && "active"}`}
          onClick={() => handleSwitch("person")}
          key="person"
        >
          <span>People</span>
        </div>
      </div>
    </Fade>
  );
};

export default MediaNavigation;
