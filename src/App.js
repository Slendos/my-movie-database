import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/NavBar.jsx/NavBar";
import Footer from "./components/Footer/Footer";

import Media from "./pages/Media/Media";
import Discover from "./pages/Discover/Discover";
import MediaDetail from "./pages/MediaDetail/MediaDetail";
import NotFound from "./pages/NotFound/NotFound";
import TvDetail from "./pages/TvDetail/TvDetail";
import PeopleDetail from "./pages/PeopleDetail/PeopleDetail";
import SeasonDetail from "./pages/SeasonDetail/SeasonDetail";
import ComponentToHide from "./components/ComponentToHide/ComponentToHide";
import store from "./store";
import "./App.css";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App" id="dimScreen">
        <Provider store={store}>
          <div>
            <ComponentToHide />
            <Switch>
              <Route path="/" exact component={() => <Media />} />
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
  );
}

export default App;
