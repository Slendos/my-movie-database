import React from "react";
import MediaExtend from "../../components/MediaExtend/MediaExtend";
import { connect } from "react-redux";

import {
  fetchSingleMedia,
  cleanDetails
} from "../../actions/singleMediaActions";
import { fetchPersonDetails } from "../../actions/mediaActions";

import SwiperContainer from "../../components/SwiperContainer/SwiperContainer";

import "./peopleDetail.css";
import PersonProfile from "../../components/PersonProfile/PersonProfile";
class PeopleDetail extends MediaExtend {
  componentDidMount() {
    const { location } = this.props;
    this.fetchData(location);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (prevProps.location.state.data.id !== location.state.data.id) {
      this.fetchData(location);
    }
  }

  componentWillUnmount() {
    this.props.cleanDetails();
  }

  fetchData = location => {
    window.scroll(0, 0);
    const { fetchSingleMedia, fetchPersonDetails } = this.props;
    let id = location.state.data.id;
    fetchSingleMedia("person", id);
    fetchPersonDetails(id, "tv_credits");
    fetchPersonDetails(id, "movie_credits");
  };

  render() {
    const { personDetails, detail } = this.props;

    return (
      <div style={{ paddingTop: "5vh" }}>
        <PersonProfile data={detail} />
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
