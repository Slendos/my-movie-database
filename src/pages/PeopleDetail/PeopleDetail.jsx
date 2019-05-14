import React, { Component } from "react";
import MediaExtend from "../../components/MediaExtend/MediaExtend";
import "./peopleDetail.css";
import {
  fetchSingleMedia,
  cleanDetails
} from "../../actions/singleMediaActions";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/Placeholder/Placeholder";
import { fetchPersonDetails } from "../../actions/mediaActions";
import Fade from "react-reveal/Fade";
import SwiperContainer from "../../components/SwiperContainer/SwiperContainer";
const imgUrl = "https://image.tmdb.org/t/p/w300";
class PeopleDetail extends MediaExtend {
  componentDidMount() {
    let id = this.props.location.state.data.id;
    this.props.fetchSingleMedia("person", id);
    this.props.fetchPersonDetails(id, "tv_credits");
    this.props.fetchPersonDetails(id, "movie_credits");
  }

  componentDidUpdate(prevProps) {
    window.scroll(0, 0);
    let id = this.props.location.state.data.id;
    if (
      prevProps.location.state.data.id !== this.props.location.state.data.id
    ) {
      this.props.fetchSingleMedia("person", id);
      this.props.fetchPersonDetails(id, "tv_credits");
      this.props.fetchPersonDetails(id, "movie_credits");
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
          <Fade left>
            <div className="people-image-wrapper">
              <LazyLoad
                height={300}
                placeholder={<Placeholder />}
                debounce={500}
              >
                <img
                  src={imgUrl + data.profile_path}
                  alt=""
                  className="people-preview"
                />
              </LazyLoad>
            </div>
          </Fade>
          <Fade right>
            <div className="people-block">
              <span className="people-name">{data.name}</span> <br />
              <span className="people-age">{data.birthday}</span>
              <div
                style={{ marginTop: "2vh", height: "21vh", overflow: "auto" }}
              >
                {data.biography}
              </div>
            </div>
          </Fade>
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
