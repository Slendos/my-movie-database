import React from "react";
import LazyLoad from "react-lazyload";

const imgUrl = "https://image.tmdb.org/t/p/w300";

const PersonProfile = ({ data }) => {
  return (
    <div className="people-wrapper">
      <div className="people-image-wrapper">
        <LazyLoad height={300}>
          <img
            src={imgUrl + data.profile_path}
            alt=""
            className="people-preview"
          />
        </LazyLoad>
      </div>
      <div className="people-block">
        <span className="people-name">{data.name}</span> <br />
        <span className="people-age">*{data.birthday}</span>
        <div className="biography-about">About</div>
        <div className="people-biography">
          {data.biography || "there is no biography"}
        </div>
      </div>
    </div>
  );
};

export default PersonProfile;
