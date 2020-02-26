import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

import { ItemsSelection } from "../components/ItemsSelection";
import { MoviesLinks } from "../components/MoviesLinks";
import { TvLinks } from "../components/TvLinks";
import { PeopleLinks } from "../components/PeopleLinks";

export const ItemsLinks = () => {
  const { type } = useParams();

  return (
    <>
      {type === "movie" && <MoviesLinks />}
      {type === "tv" && <TvLinks />}
      {type === "person" && <PeopleLinks />}

      <Switch>
        <Route path="/:type/:option" component={ItemsSelection} />
      </Switch>
    </>
  );
};
