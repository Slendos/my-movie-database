import React from "react";

const Rating = ({ rating }) => {
  return rating > 0 ? (
    <span style={{ fontWeight: "bold" }}>
      {" "}
      <span style={{ fontSize: "1.5vh" }}>
        <i className="fas fa-star" style={{ color: "red" }} />
        {" " + rating}
      </span>
      <br />
    </span>
  ) : (
    <span>No rating</span>
  );
};

export default Rating;
