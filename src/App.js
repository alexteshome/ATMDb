import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ height: "100%" }}>
        <Router basename="/movies">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/:movie" component={MovieDetails} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
