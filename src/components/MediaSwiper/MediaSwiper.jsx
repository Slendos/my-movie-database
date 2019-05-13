import React, { Component } from "react";
import SwiperContainer from "../SwiperContainer/SwiperContainer";
import "./mediaSwiper.css";
const MediaSwiper = ({
  mediaType,
  titles,
  types,
  imgPath,
  type,
  genres,
  title
}) => {
  console.log(titles, "titles");
  const component = titles.map((title, index) => (
    <SwiperContainer
      movie={mediaType[types[index]].results}
      genres={genres || null}
      title={title}
      imgPath={imgPath}
      type={type}
    />
  ));
  return (
    <div>
      <div className="section-title">{title}</div> <div>{component}</div>
    </div>
  );
};

export default MediaSwiper;
