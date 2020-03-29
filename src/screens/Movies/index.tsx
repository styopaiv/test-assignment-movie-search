import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import { Movie } from "./components/Movie";
import { MoviesList } from "./components/MoviesList";
import { Navigation } from "components/Navigation";

export const Movies: React.FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={match.path}>
          <MoviesList />
        </Route>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
      </Switch>
    </>
  );
};
