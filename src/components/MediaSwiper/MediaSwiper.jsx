import React from "react";
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
  return (
    <div>
      <div className="section-title">{title}</div>
      <div>
        {titles.map((title, index) => (
          <SwiperContainer
            movie={mediaType[types[index]].results}
            genres={genres || null}
            title={title}
            imgPath={imgPath}
            type={type}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaSwiper;
