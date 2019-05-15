import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Fade from "react-reveal/Fade";

import NavBarForm from "../NavBarForm/NavBarForm";

import icon from "../../images/filmIcon.png";
import "./navBar.css";
class NavBar extends Component {
  render() {
    return (
      <Fade down>
        <div className="navbar">
          <div className="navbar-wrapper" style={{ display: "inline-block" }}>
            <div className="nav-icon-wrapper">
              <Link to="/">
                <img src={icon} alt="" className="nav-icon" />
              </Link>
            </div>
            {this.props.visible && <NavBarForm />}
          </div>
        </div>
      </Fade>
    );
  }
}

export default NavBar;
