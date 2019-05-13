import React, { Component } from "react";
import { Redirect } from "react-router";
import "./navBar.css";
import icon from "../../images/filmIcon.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Fade from "react-reveal/Fade";
class NavBar extends Component {
  state = {
    text: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e, this.props, "history");
  };
  render() {
    if (this.state.submitted) {
      console.log("submitted");
    }
    return (
      <Fade down>
        <div className="navbar">
          <div style={{ display: "inline-block" }} />
          <div className="navbar-wrapper" style={{ display: "inline-block" }}>
            {/* <div className="home-wrapper">
            
          </div> */}
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                float: "left"
              }}
            >
              <Link to="/">
                <img
                  src={icon}
                  alt=""
                  style={{
                    width: "50px",
                    paddingTop: "2px",
                    cursor: "pointer"
                  }}
                />
              </Link>
            </div>
            <div className="form-search">
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <input
                    type="text"
                    className="input-text"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-input form-button">
                  <Link
                    to={{
                      pathname: "/discover",
                      state: { data: this.state.text }
                    }}
                  >
                    <button type="submit" className="input-submit">
                      <i className="fas fa-search" />
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            {/* <div className="discover-link" /> */}
          </div>
          {/* <div style={{ float: "right" }}>Discover</div> */}
        </div>
      </Fade>
    );
  }
}

export default NavBar;
