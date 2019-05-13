import React, { Component } from "react";

const Review = ({ review }) => {
  const getContent = ({ content, author }) => {
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
      <div>{review.author}</div>
      <div>
        <i> {getContent(review)}</i>
      </div>
      <a href={review.url}>Read more</a>
    </div>
  );
};

export default Review;
