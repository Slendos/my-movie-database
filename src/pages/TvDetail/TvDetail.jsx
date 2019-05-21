import React from "react";
import { connect } from "react-redux";
import {
  fetchSingleMedia,
  fetchTvDetails,
  cleanTvDetails,
  cleanDetails
} from "../../actions/singleMediaActions";

import { fetchGenres } from "../../actions/genresActions";
import SwiperContainer from "../../components/SwiperContainer/SwiperContainer";
import MediaExtend from "../../components/MediaExtend/MediaExtend";

import "./tvDetail.css";
class TvDetail extends MediaExtend {
  componentDidMount() {
    window.scroll(0, 0);
    const { fetchSingleMedia, fetchTvDetails, fetchGenres } = this.props;

    let id = this.props.location.state.data.id;
    fetchSingleMedia("tv", id);
    fetchGenres();
    fetchTvDetails(id, "credits");
    fetchTvDetails(id, "videos");
    fetchTvDetails(id, "similar");
    fetchTvDetails(id, "reviews");
    fetchTvDetails(id, "recommendations");
    // this.props.fetchTvEpisodes(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchSingleMedia, fetchTvDetails, location } = this.props;
    let id = location.state.data.id;

    if (prevProps.location.state.data.id !== location.state.data.id) {
      window.scroll(0, 0);
      fetchSingleMedia("tv", id);
      fetchTvDetails(id, "videos");
      fetchTvDetails(id, "credits");
      fetchTvDetails(id, "similar");
      fetchTvDetails(id, "reviews");
      fetchTvDetails(id, "recommendations");
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

    return (
      <div style={{ paddingTop: "5vh" }}>
        {this.renderBackground(data, genres, "tv")}
        <div className="tv-overview-wrapper">
          {/* <div style={{ flex: 1 }}>{this.renderOverview(data.overview)}</div> */}
          {tvDetail.videos.results && (
            <div style={{ paddingTop: "5vh", flex: 1 }}>
              {this.renderVideo(tvDetail.videos)}
            </div>
          )}
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
  }
)(TvDetail);
