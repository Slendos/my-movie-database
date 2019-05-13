import React, { Fragment } from "react";
import { Provider } from "react-redux";

import Media from "./components/Media/Media";
import NavBar from "./components/NavBar.jsx/NavBar";
import Footer from "./components/Footer/Footer";

import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import store from "./store";
import SlideShow from "./components/SlideShow/SlideShow";
import Discover from "./pages/Discover/Discover";
import MediaDetail from "./pages/MediaDetail/MediaDetail";
import NotFound from "./pages/NotFound/NotFound";
import TvDetail from "./pages/TvDetail/TvDetail";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

import { HashRouter } from "react-router-dom/cjs/react-router-dom";
import PeopleDetail from "./pages/PeopleDetail/PeopleDetail";
import SeasonDetail from "./pages/SeasonDetail/SeasonDetail";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    // <BrowserRouter>
    <BrowserRouter basename="movie-database-redux">
      <div className="App" id="dimScreen">
        <Provider store={store}>
          <div>
            <NavBar />
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  // <div style={{ paddingTop: "5vh", marginBottom: "0px" }}>
                  <Fragment>
                    <Media />
                  </Fragment>
                  // </div>
                )}
              />
              <Route path="/movie/:id" component={MediaDetail} />
              <Route path="/tv/:id" exact component={TvDetail} />
              <Route
                path="/tv/:id/season/:season_number"
                component={SeasonDetail}
                exact
              />
              <Route path="/person/:id" component={PeopleDetail} />
              <Route path="/discover" exact component={Discover} />
              <Route path="/not-found" exact component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
            <Footer />
          </div>
        </Provider>
      </div>
    </BrowserRouter>
    // </BrowserRouter>
  );
}

export default App;
