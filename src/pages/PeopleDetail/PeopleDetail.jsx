import React from "react";
import MediaExtend from "../../components/MediaExtend/MediaExtend";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";
import { connect } from "react-redux";

import {
  fetchSingleMedia,
  cleanDetails
} from "../../actions/singleMediaActions";
import { fetchPersonDetails } from "../../actions/mediaActions";

import Placeholder from "../../components/Placeholder/Placeholder";
import SwiperContainer from "../../components/SwiperContainer/SwiperContainer";

import "./peopleDetail.css";
const imgUrl = "https://image.tmdb.org/t/p/w300";
class PeopleDetail extends MediaExtend {
  componentDidMount() {
    const { fetchSingleMedia, fetchPersonDetails, location } = this.props;
    let id = location.state.data.id;
    fetchSingleMedia("person", id);
    fetchPersonDetails(id, "tv_credits");
    fetchPersonDetails(id, "movie_credits");
  }

  componentDidUpdate(prevProps) {
    window.scroll(0, 0);
    const { fetchSingleMedia, fetchPersonDetails, location } = this.props;
    let id = location.state.data.id;
    if (prevProps.location.state.data.id !== location.state.data.id) {
      fetchSingleMedia("person", id);
      fetchPersonDetails(id, "tv_credits");
      fetchPersonDetails(id, "movie_credits");
    }
  }

  componentWillUnmount() {
    this.props.cleanDetails();
  }

  render() {
    const data = this.props.detail;
    const { personDetails } = this.props;

    return (
      <div style={{ paddingTop: "5vh" }}>
        <div
          className="people-wrapper"
          style={{ textAlign: "left", minHeight: "100%" }}
        >
          <div className="people-image-wrapper">
            <LazyLoad height={300} placeholder={<Placeholder />} debounce={500}>
              <img
                src={imgUrl + data.profile_path}
                alt=""
                className="people-preview"
              />
            </LazyLoad>
          </div>
          <div className="people-block">
            <span className="people-name">{data.name}</span> <br />
            <span className="people-age">{data.birthday}</span>
            <div style={{ marginTop: "2vh", height: "21vh", overflow: "auto" }}>
              {data.biography}
            </div>
          </div>
        </div>
        <SwiperContainer
          movie={personDetails.movie_credits.cast}
          genres={null}
          imgPath="poster_path"
          type="movie"
          title="Movie Credits"
        />
        <SwiperContainer
          movie={personDetails.tv_credits.cast}
          genres={null}
          imgPath="poster_path"
          type="tv"
          title="Tv Credits"
        />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  detail: state.mediaDetail.detail,
  personDetails: state.mediaDetail.personDetails
});

export default connect(
  mapStatetoProps,
  { fetchSingleMedia, fetchPersonDetails, cleanDetails }
)(PeopleDetail);
