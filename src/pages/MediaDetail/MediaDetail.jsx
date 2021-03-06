import React from "react";
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
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const imgUrl = "https://image.tmdb.org/t/p/original";
// const smallUrl = "https://image.tmdb.org/t/p/w200";
class MediaDetail extends MediaExtend {
  fetchData = location => {
    const { fetchSingleMedia, fetchMovieDetails } = this.props;
    let id = location.state.data.id;
    fetchSingleMedia("movie", id);
    fetchMovieDetails(id, "credits");
    fetchMovieDetails(id, "similar");
    fetchMovieDetails(id, "reviews");
    fetchMovieDetails(id, "videos");
    fetchMovieDetails(id, "images");
  };

  componentDidMount() {
    const { fetchGenres, location } = this.props;
    window.scroll(0, 0);
    fetchGenres();
    this.fetchData(location);
  }

  componentDidUpdate(prevProps) {
    window.scroll(0, 0);
    const { location } = this.props;
    if (prevProps.location.state.data.id !== location.state.data.id) {
      this.fetchData(location);
    }
  }

  componentWillUnmount() {
    this.props.cleanDetails();
  }

  render() {
    const data = this.props.detail;
    const { genres, movie } = this.props;
    let images = movie.images.backdrops && movie.images.backdrops.slice(0, 20);
    let gallery =
      images &&
      images.map(img => ({
        original: imgUrl + img.file_path
      }));

    return (
      <main>
        <div style={{ width: "100%", height: "100vh" }}>
          {this.renderBackground(data, genres, "movie")}
        </div>
        {/* <article /> */}
        <article className="tv-overview-wrapper">
          {gallery && (
            <div className="gallery-wrapper">
              <ImageGallery
                items={gallery}
                showThumbnails={false}
                autoPlay={true}
                slideInterval={6000}
                lazyLoad={true}
              />
            </div>
          )}
          {/* <div style={{ flex: 1 }}>{this.renderOverview(data.overview)}</div>
          {console.log("video", movie.videos)} */}
          {movie.videos.results && (
            <div style={{ flex: 1, marginBottom: "2vh", marginLeft: "2vh" }}>
              {" "}
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
