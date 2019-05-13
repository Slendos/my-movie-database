import React, { Component } from "react";
import "./footer.css";
import movieDb from "../../images/movieDb.png";
class Footer extends Component {
  render() {
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
  }
}

export default Footer;
