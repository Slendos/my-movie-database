import React from "react";

import movieDb from "../../images/movieDb.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        {" "}
        <div>
          <img src={movieDb} alt="" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
