import React from "react";

const Rating = ({ rating }) => {
  return (
    <span style={{ fontWeight: "bold" }}>
      {" "}
      <span style={{ fontSize: "1.5vh" }}>
        <i className="fas fa-star" style={{ color: "red" }} />
        {" " + rating}
      </span>
      <br />
    </span>
  );
};

export default Rating;
