import React from "react";

import movieDb from "../../images/movieDb.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        {" "}
        <a href="https://www.themoviedb.org/">
          <div style={{ display: "inline-block" }}>
            <img src={movieDb} alt="" className="footer-logo" />
          </div>
        </a>
        <div className="inline">
          <div className="credits">
            <p>
              This product uses the TMDb API but is not endorsed or certified by
              TMDb.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
