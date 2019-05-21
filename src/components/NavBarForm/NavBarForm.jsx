import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
class NavBarForm extends Component {
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
    return (
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
                <i className="fas fa-search" style={{ color: "black" }} />
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NavBarForm;
