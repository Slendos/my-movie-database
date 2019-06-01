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
  fetchData = id => {
    const { fetchSingleMedia, fetchTvDetails } = this.props;

    fetchSingleMedia("tv", id);
    fetchTvDetails(id, "videos");
    fetchTvDetails(id, "credits");
    fetchTvDetails(id, "similar");
    fetchTvDetails(id, "reviews");
    fetchTvDetails(id, "recommendations");
  };

  componentDidMount() {
    window.scroll(0, 0);
    const { fetchGenres, location } = this.props;
    let id = location.state.data.id;

    fetchGenres();
    this.fetchData(id);
    // this.props.fetchTvEpisodes(id);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    let id = location.state.data.id;

    if (prevProps.location.state.data.id !== location.state.data.id) {
      window.scroll(0, 0);
      this.fetchData(id);
      // this.props.fetchTvEpisodes(id);
    }
  }

  componentWillUnmount() {
    this.props.cleanDetails();
  }

  render() {
    const { genres, tvDetail, detail, location } = this.props;
    const { data } = location.state;
    const { seasons } = detail;

    return (
      <div style={{ paddingTop: "5vh" }}>
        {this.renderBackground(data, genres, "tv")}
        <div className="tv-overview-wrapper">
          {tvDetail.videos.results && (
            <div style={{ paddingTop: "2vh", flex: 1 }}>
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
