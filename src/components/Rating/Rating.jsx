import React from "react";

const Rating = ({ rating }) => {
  return rating > 0 ? (
    <span style={{ fontWeight: "bold" }} className="myswiper-rating">
      {" "}
      <span style={{ fontSize: "1.5vh" }}>
        <i className="fas fa-star" style={{ color: "red" }} />
        {" " + rating}
      </span>
    </span>
  ) : (
    ""
  );
};

export default Rating;
