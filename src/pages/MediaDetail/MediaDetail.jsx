import React, { Component } from "react";
import MediaExtend from "../../components/MediaExtend/MediaExtend";
import {
  fetchSingleMedia,
  fetchMovieDetails,
  cleanDetails
} from "../../actions/singleMediaActions";
import { fetchGenres } from "../../actions/genresActions";
import { connect } from "react-redux";
import "./mediaDetail.css";
import SwiperContainer from "../../components/SwiperContainer/SwiperContainer";
import Review from "../../components/Review/Review";

const imgUrl = "https://image.tmdb.org/t/p/original";

class MediaDetail extends MediaExtend {
  componentDidMount() {
    window.scroll(0, 0);
    let id = this.props.location.state.data.id;
    console.log("STATE", this.props);
    console.log("ID", id, this.props.location.state.data);
    this.props.fetchSingleMedia("movie", id);
    this.props.fetchGenres();
    this.props.fetchMovieDetails(id, "credits");
    this.props.fetchMovieDetails(id, "similar");
    this.props.fetchMovieDetails(id, "reviews");
    this.props.fetchMovieDetails(id, "videos");
  }

  componentDidUpdate(prevProps) {
    window.scroll(0, 0);
    let id = this.props.location.state.data.id;
    if (
      prevProps.location.state.data.id !== this.props.location.state.data.id
    ) {
      this.props.fetchSingleMedia("movie", id);
      this.props.fetchMovieDetails(id, "credits");
      this.props.fetchMovieDetails(id, "similar");
      this.props.fetchMovieDetails(id, "reviews");
      this.props.fetchMovieDetails(id, "videos");
    }
  }

  componentWillUnmount() {
    this.props.cleanDetails();
  }

  getContent({ content, author }) {
    const LIMIT = 200;
    let str;
    if (content.length > LIMIT) {
      str = content.substring(0, LIMIT) + "...";
    } else {
      return content;
    }
    return str;
  }

  render() {
    const data = this.props.detail;
    const { genres, movie } = this.props;
    console.log("DATA", data, movie);
    return (
      <main>
        <div style={{ width: "100%", height: "100vh" }}>
          {this.renderBackground(data, genres, "movie")}
        </div>
        {/* <article /> */}
        <article className="overview-main" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>{this.renderOverview(data.overview)}</div>
          {console.log("video", movie.videos)}
          {movie.videos.results && (
            <div style={{ flex: 1 }}>
              {" "}
              {console.log(movie.videos.results)}
              {this.renderVideo(movie.videos)}
            </div>
          )}
        </article>
        {movie.reviews.results && movie.reviews.results.length !== 0 ? (
          <article style={{ textAlign: "left" }}>
            <span className="swiper-title">Reviews</span>
            {movie.reviews.results.map(review => (
              <Review review={review} />
            ))}
          </article>
        ) : (
          <div
            style={{
              textAlign: "left",
              width: "80%",
              margin: "0 auto",
              marginBottom: "5vh"
            }}
          >
            <div>
              <span className="swiper-title">Reviews</span>
            </div>
            <div style={{ marginTop: "5vh", marginLeft: "1vh" }}>
              There are no reviews
            </div>
          </div>
        )}
        <SwiperContainer
          movie={movie.credits.cast}
          genres={null}
          imgPath="profile_path"
          type="person"
          title="Cast"
        />
        <SwiperContainer
          movie={movie.similar.results}
          genres={genres}
          imgPath="poster_path"
          type="movie"
          title="Similar"
        />
      </main>
    );
  }
}

const mapStatetoProps = state => ({
  detail: state.mediaDetail.detail,
  genres: state.genres.list,
  tvDetail: state.mediaDetail.tv,
  movie: state.mediaDetail.movie
});

export default connect(
  mapStatetoProps,
  { fetchSingleMedia, fetchGenres, fetchMovieDetails, cleanDetails }
)(MediaDetail);
