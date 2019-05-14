import React, { Component } from "react";
import { API_KEY } from "../../actions/types";
import { connect } from "react-redux";
import Episode from "../../components/Episode/Episode";
import "./seasonDetail.css";
const imgUrl = "https://image.tmdb.org/t/p/original";
const smallUrl = "https://image.tmdb.org/t/p/w500";
class SeasonDetail extends Component {
  state = {
    seasonDetail: null
  };
  componentDidMount() {
    const data = this.props.location.state.data;
    const id = this.props.location.state.id;
    const tv_id = data.id;
    const season_number = data.season_number;

    fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${API_KEY}&language=en-US`
    )
      .then(blob => blob.json())
      .then(season => this.setState({ seasonDetail: season }));
  }
  render() {
    const data = this.props.location.state.data;
    const { seasonDetail } = this.state;

    return (
      <div style={{ paddingTop: "5vh", minHeight: "100%" }}>
        <div className="season-wrapper">
          <img
            src={smallUrl + data.poster_path}
            alt=""
            className="people-preview"
            style={{ display: "inline-block", verticalAlign: "top" }}
          />
          <div className="season-description">
            <div className="season-title">{data.name}</div>
            <div className="season-overview">{data.overview}</div>
          </div>
        </div>
        <div className="episodes-wrapper">
          {seasonDetail &&
            seasonDetail.episodes.map(episode => <Episode data={episode} />)}
        </div>
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
  {}
)(SeasonDetail);
