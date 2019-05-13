import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSingleMedia,
  fetchTvDetails,
  cleanTvDetails,
  cleanDetails
  // fetchTvEpisodes,
  // fetchTvSeasons
} from "../../actions/singleMediaActions";

import "./tvDetail.css";
import { fetchGenres } from "../../actions/genresActions";
import SwiperContainer from "../../components/SwiperContainer/SwiperContainer";
import MySwiper from "../../components/MySwiper/MySwiper";
import MediaExtend from "../../components/MediaExtend/MediaExtend";

class TvDetail extends MediaExtend {
  componentDidMount() {
    const { detail } = this.props;
    const numberOfSeasons = detail.number_of_seasons;
    console.log("datatv", numberOfSeasons);
    window.scroll(0, 0);
    let id = this.props.location.state.data.id;
    this.props.fetchSingleMedia("tv", id);
    console.log("ID", this.props);
    this.props.fetchGenres();
    this.props.fetchTvDetails(id, "credits");
    this.props.fetchTvDetails(id, "videos");
    this.props.fetchTvDetails(id, "similar");
    this.props.fetchTvDetails(id, "reviews");
    this.props.fetchTvDetails(id, "recommendations");
    // this.props.fetchTvEpisodes(id);
  }

  componentDidUpdate(prevProps) {
    window.scroll(0, 0);
    let id = this.props.location.state.data.id;
    if (
      prevProps.location.state.data.id !== this.props.location.state.data.id
    ) {
      this.props.fetchSingleMedia("tv", id);
      this.props.fetchTvDetails(id, "credits");
      this.props.fetchTvDetails(id, "videos");
      this.props.fetchTvDetails(id, "similar");
      this.props.fetchTvDetails(id, "reviews");
      this.props.fetchTvDetails(id, "recommendations");
      // this.props.fetchTvEpisodes(id);
    }
  }

  componentWillUnmount() {
    this.props.cleanDetails();
  }

  render() {
    const { data } = this.props.location.state;
    const { genres, tvDetail, detail } = this.props;
    const { seasons } = detail;
    console.log("genres", genres, tvDetail);
    console.log("DATATV", detail, seasons);
    const numberOfSeasons = detail.number_of_seasons;
    console.log("DATATV", numberOfSeasons, seasons);
    return (
      <div style={{ paddingTop: "5vh" }}>
        {this.renderBackground(data, genres, "tv")}
        <div
          style={{
            display: "flex",
            width: "80%",
            margin: "0 auto",
            marginTop: "5vh"
          }}
        >
          <div style={{ flex: 1 }}>{this.renderOverview(data.overview)}</div>
          <div style={{ paddingTop: "5vh", flex: 1 }}>
            {this.renderVideo(tvDetail.videos)}
          </div>
        </div>
        <div style={{ textAlign: "left", width: "80%", margin: "0 auto" }} />
        <SwiperContainer
          movie={seasons}
          genres={null}
          imgPath="poster_path"
          title="Seasons"
          type="season"
          movieId={detail.id}
        />
        <SwiperContainer
          movie={tvDetail.credits.cast}
          genres={null}
          imgPath="profile_path"
          type="person"
          title="Cast"
        />
        <SwiperContainer
          movie={tvDetail.similar.results}
          genres={genres}
          imgPath="poster_path"
          type="tv"
          title="Similar"
        />
        <SwiperContainer
          movie={tvDetail.recommendations.results}
          genres={genres}
          imgPath="poster_path"
          type="tv"
          title="Recommended"
        />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  detail: state.mediaDetail.detail,
  tvDetail: state.mediaDetail.tv,
  genres: state.genres.list
});

export default connect(
  mapStatetoProps,
  {
    fetchSingleMedia,
    fetchGenres,
    fetchTvDetails,
    cleanTvDetails,
    cleanDetails
    // fetchTvEpisodes,
    // fetchTvSeasons
  }
)(TvDetail);
