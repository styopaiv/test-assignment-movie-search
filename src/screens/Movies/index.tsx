import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import { useMoviesSearch, useFetchUpcomingMovies } from "./hooks";

import { Movie } from "./components/Movie";
import { Navigation } from "components/Navigation";
import { ItemsList } from "components/ItemsList";

export const Movies: React.FC = () => {
  const match = useRouteMatch();
  const { upcomingMovies } = useFetchUpcomingMovies();
  const { onSearch, movies, searchText } = useMoviesSearch();

  return (
    <>
      <Navigation onSearch={onSearch} />
      <Switch>
        <Route exact path={match.path}>
          <ItemsList items={searchText ? movies : upcomingMovies} />
        </Route>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
      </Switch>
    </>
  );
};
