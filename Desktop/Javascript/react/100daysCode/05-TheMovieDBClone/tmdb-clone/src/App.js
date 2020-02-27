import React from "react";
import { Route, Switch } from "react-router-dom";

import { AddNewItem } from "./pages/AddNewItem";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ItemsLinks } from "./pages/ItemsType";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./pages/NotFound";
import { NewMovie } from "./components/NewMovie";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Search } from "./pages/Search";

export const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/discover" component={Search} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/rate_testing" component={AddNewItem} />
        <Route path="/search/:type" component={ItemsLinks} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};
