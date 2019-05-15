import { withRouter } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";
import React from "react";

const ComponentToHide = props => {
  const { location } = props;
  if (location.pathname.match(/discover/)) {
    return null;
  }

  return <NavBar visible={true} />;
};

const ComponentThatHides = withRouter(ComponentToHide);

export default ComponentThatHides;
