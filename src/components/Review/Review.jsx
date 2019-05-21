import React from "react";
import "./review.css";
const Review = ({ review }) => {
  const getContent = ({ content }) => {
    const LIMIT = 200;
    let str;
    if (content.length > LIMIT) {
      str = content.substring(0, LIMIT) + "...";
    } else {
      return content;
    }
    return str;
  };
  return (
    <div className="review-wrapper">
      <div>
        <span className="review-author">{review.author}</span>
      </div>
      <div style={{ marginBottom: "2vh" }}>
        <i className="review-content"> {getContent(review)}</i>
      </div>
      <a href={review.url} className="review-url">
        Read more
      </a>
    </div>
  );
};

export default Review;
