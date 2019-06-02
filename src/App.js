import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Media from "./pages/Media/Media";
import Discover from "./pages/Discover/Discover";
import MediaDetail from "./pages/MediaDetail/MediaDetail";
import NotFound from "./pages/NotFound/NotFound";
import TvDetail from "./pages/TvDetail/TvDetail";
import PeopleDetail from "./pages/PeopleDetail/PeopleDetail";
import SeasonDetail from "./pages/SeasonDetail/SeasonDetail";
import ComponentToHideNav from "./components/ComponentToHide/ComponentToHide";

import store from "./store";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App" id="dimScreen">
        <Provider store={store}>
          <div>
            <ComponentToHideNav />
            <Switch>
              <Route path="/" exact component={Media} />
              <Route path="/movie/:id" component={MediaDetail} />
              <Route path="/tv/:id" component={TvDetail} />
              <Route
                path="/tv/:id/season/:season_number"
                component={SeasonDetail}
              />
              <Route path="/person/:id" component={PeopleDetail} />
              <Route path="/discover" component={Discover} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
            <Footer />
          </div>
        </Provider>
      </div>
    </HashRouter>
  );
}

export default App;
