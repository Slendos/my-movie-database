import React, { Component } from "react";
import { API_KEY } from "../../actions/types";
import "./discover.css";
import GenreItem from "../../components/GenreItem/GenreItem";
import { Link } from "react-router-dom/cjs/react-router-dom";
import DiscoverField from "../../components/DiscoverField/DiscoverField";

const imgUrl = "https://image.tmdb.org/t/p/original";

class Discover extends Component {
  state = {
    text: "",
    search: []
  };
  componentDidMount() {
    window.scroll(0, 0);
    const text = this.props.location.state.data;
    console.log("searchText", text);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`
    )
      .then(blob => blob.json())
      .then(data => {
        this.setState({ search: data });
        console.log(data);
      });

    this.setState({ text });
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e, page = 1) => {
    e.preventDefault();
    const { text, activeGenre } = this.state;
    console.log("SUBMITed", e, text, activeGenre);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${text}`;
    console.log("url", url);
    fetch(url)
      .then(blob => blob.json())
      .then(data => this.setState({ search: data }));
  };

  searchGenre = genre => {
    this.setState({ activeGenre: genre });
  };

  handlePaginate = (page, pageSize) => {
    window.scroll(0, 0);
    const { text } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${text}`;
    console.log("url", url);
    fetch(url)
      .then(blob => blob.json())
      .then(data => this.setState({ search: data }));
  };

  render() {
    const { genres, search, activeGenre } = this.state;
    console.log("SEARCH", search.results);
    console.log("genres", genres);
    return (
      <div style={{ paddingTop: "6vh" }}>
        <div>Discover</div>

        <DiscoverField
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handlePaginate={this.handlePaginate}
          text={this.state.text}
          search={search}
        />
      </div>
    );
  }
}

export default Discover;
