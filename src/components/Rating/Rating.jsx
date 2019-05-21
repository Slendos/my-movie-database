import React, { Fragment } from "react";

const Rating = ({ rating }) => {
  return rating > 0 ? (
    <Fragment>
      <span style={{ fontWeight: "bold" }} className="myswiper-rating">
        {" "}
        <span style={{ fontSize: "1.5vh" }}>
          <i className="fas fa-star" style={{ color: "red" }} />
          {" " + rating}
        </span>
      </span>
      {/* <br /> */}
    </Fragment>
  ) : (
    ""
  );
};

export default Rating;
