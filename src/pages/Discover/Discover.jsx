import React, { Component, Fragment } from "react";
import { API_KEY } from "../../actions/types";
import DiscoverField from "../../components/DiscoverField/DiscoverField";
import NavBar from "../../components/NavBar.jsx/NavBar";
import "./discover.css";
// const imgUrl = "https://image.tmdb.org/t/p/w500";

class Discover extends Component {
  state = {
    text: "",
    search: []
  };
  componentDidMount() {
    window.scroll(0, 0);
    const text = this.props.location.state && this.props.location.state.data;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`
    )
      .then(blob => blob.json())
      .then(data => {
        this.setState({ search: data });
      });

    this.setState({ text });
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e, page = 1) => {
    e.preventDefault();
    const { text } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${text}`;

    fetch(url)
      .then(blob => blob.json())
      .then(data => this.setState({ search: data }));
  };

  searchGenre = genre => {
    this.setState({ activeGenre: genre });
  };

  handlePaginate = page => {
    window.scroll(0, 0);
    const { text } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${text}`;

    fetch(url)
      .then(blob => blob.json())
      .then(data => this.setState({ search: data }));
  };

  render() {
    const { search } = this.state;
    return (
      <Fragment>
        <NavBar visible={false} />
        <div style={{ paddingTop: "6vh" }}>
          <div className="discover-title">Search Movies</div>

          <DiscoverField
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handlePaginate={this.handlePaginate}
            text={this.state.text}
            search={search}
          />
        </div>
      </Fragment>
    );
  }
}

export default Discover;
