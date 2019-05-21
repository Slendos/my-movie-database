import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  fetchMedia,
  fetchMovie,
  fetchTv,
  fetchPerson
} from "../../actions/mediaActions";
import { fetchGenres } from "../../actions/genresActions";

import SlideShow from "../../components/SlideShow/SlideShow";
import MediaSwiper from "../../components/MediaSwiper/MediaSwiper";
import MediaNavigation from "../../components/MediaNavigation/MediaNavigation";

import "./media.css";

// MOVIE TYPES: top_rated, popular, upcoming, now_playing, latest
// TV TYPES: airing_today, on_the_air, popular, top_rated
// PERSON TYPES: latest, popular
class Media extends Component {
  state = {
    time: "week",
    media: "movie"
  };

  componentDidMount() {
    const movieTypes = ["top_rated", "popular", "upcoming", "now_playing"];
    const tvTypes = ["airing_today", "on_the_air", "popular", "top_rated"];
    const peopleTypes = ["popular"];
    const { fetchMovie, fetchPerson, fetchTv, fetchGenres } = this.props;

    window.scroll(0, 0);
    fetchGenres();
    for (let i in movieTypes) {
      fetchMovie(movieTypes[i]);
    }
    for (let i in tvTypes) {
      fetchTv(tvTypes[i]);
    }
    for (let i in peopleTypes) {
      fetchPerson(peopleTypes[i]);
    }
  }

  handleSwitch = type => {
    this.setState({ media: type });
  };

  render() {
    const { genres } = this.props;
    const { media } = this.state;
    const movieTypes = ["popular", "top_rated", "upcoming", "now_playing"];
    const movieTitles = ["popular", "top rated", "upcoming", "now playing"];
    const personTypes = ["popular"];
    const personTitles = ["Popular"];
    const tvTypes = ["on_the_air", "airing_today", "popular", "top_rated"];
    const tvTitles = ["TV ON THE AIR", "Airing Today", "POPULAR", "TOP RATED"];

    return (
      <div>
        <div style={{ height: "100vh", width: "100%" }}>
          <div className="slideshow-wrapper-main">
            {this.props.movie["now_playing"] &&
              this.props.movie["now_playing"].results !== undefined && (
                <SlideShow data={this.props.movie["now_playing"].results} />
              )}
          </div>
        </div>

        <Fragment>
          <MediaNavigation handleSwitch={this.handleSwitch} media={media} />
          {(media === "movie" || media === "all") && (
            <MediaSwiper
              mediaType={this.props.movie}
              titles={movieTitles}
              types={movieTypes}
              imgPath="poster_path"
              type="movie"
              genres={genres}
              title="Movies"
            />
          )}
          {(media === "tv" || media === "all") && (
            <MediaSwiper
              mediaType={this.props.tv}
              titles={tvTitles}
              types={tvTypes}
              imgPath="poster_path"
              type="tv"
              genres={genres}
              title="TV"
            />
          )}
          {(media === "person" || media === "all") && (
            <MediaSwiper
              mediaType={this.props.person}
              titles={personTitles}
              types={personTypes}
              imgPath="profile_path"
              type="person"
              title="People"
            />
          )}
        </Fragment>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  week: state.media.week,
  day: state.media.day,
  movie: state.movie.movie,
  all: state.media.all,
  person: state.person.person,
  tv: state.tv.tv,
  genres: state.genres.list
});

export default connect(
  mapStatetoProps,
  { fetchMedia, fetchGenres, fetchMovie, fetchPerson, fetchTv }
)(Media);
