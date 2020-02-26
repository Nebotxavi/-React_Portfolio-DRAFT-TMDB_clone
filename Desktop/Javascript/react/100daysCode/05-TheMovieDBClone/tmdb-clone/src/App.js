import React from "react";
import { Route, Switch } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { NewMovie } from "./components/NewMovie";
import { ItemsLinks } from "./pages/ItemsType";
import { Search } from "./pages/Search";

export const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route path="/discover" component={Search} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route path="/login" component={Login} />
      <Route path="/:type" component={ItemsLinks} />
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </>
);
