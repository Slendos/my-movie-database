import React, { Component } from "react";

const Rating = ({ rating }) => {
  return (
    <span style={{ fontWeight: "bold" }}>
      {" "}
      <i className="fas fa-star" style={{ color: "red" }} />
      {" " + rating}
      <br />
    </span>
  );
};

export default Rating;
