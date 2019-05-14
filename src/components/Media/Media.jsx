import React, { Component, Fragment } from "react";
import SlideShow from "../SlideShow/SlideShow";
import { connect } from "react-redux";
import {
  fetchMedia,
  fetchMovie,
  fetchTv,
  fetchPerson
} from "../../actions/mediaActions";
import { fetchGenres } from "../../actions/genresActions";
import "./media.css";
import MediaSwiper from "../MediaSwiper/MediaSwiper";
import Fade from "react-reveal/Fade";
import MediaNavigation from "../MediaNavigation/MediaNavigation";
class Media extends Component {
  state = {
    time: "week",
    media: "movie"
  };

  componentDidMount() {
    // MOVIE TYPES: top_rated, popular, upcoming, now_playing, latest
    // TV TYPES: airing_today, on_the_air, popular, top_rated
    // PERSON TYPES: latest, popular
    const movieTypes = ["top_rated", "popular", "upcoming", "now_playing"];
    const tvTypes = ["airing_today", "on_the_air", "popular", "top_rated"];
    const peopleTypes = ["popular"];
    window.scroll(0, 0);
    this.props.fetchGenres();
    for (let i in movieTypes) {
      this.props.fetchMovie(movieTypes[i]);
    }
    for (let i in tvTypes) {
      this.props.fetchTv(tvTypes[i]);
    }
    for (let i in peopleTypes) {
      this.props.fetchPerson(peopleTypes[i]);
    }
  }

  // shouldComponentUpdate(nextState) {
  //   // if (nextState.time !== this.state.time) return true;
  //   // return false;
  // }

  handleSwitch = type => {
    // if (this.state.time === "week") {
    //   this.setState({ time: "day" });
    // } else if (this.state.time === "day") {
    //   this.setState({ time: "week" });
    // }

    this.setState({ media: type });
  };

  render() {
    const { genres, day, week, movie, person, tv } = this.props;
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
                <Fade left>
                  <SlideShow data={this.props.movie["now_playing"].results} />
                </Fade>
              )}
          </div>
        </div>

        <Fragment>
          <MediaNavigation
            handleSwitch={this.handleSwitch}
            media={this.state.media}
          />
          {(this.state.media == "movie" || this.state.media == "all") && (
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
          {(this.state.media == "tv" || this.state.media == "all") && (
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
          {(this.state.media == "person" || this.state.media == "all") && (
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
