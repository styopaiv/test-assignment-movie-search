import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import { Actor } from "./components/Actor";
import { useActorsSearch } from "./hooks";
import { ItemsList } from "components/ItemsList";
import { Navigation } from "components/Navigation";

export const Actors: React.FC = () => {
  const match = useRouteMatch();
  const { actors, onSearch } = useActorsSearch();

  return (
    <>
      <Navigation onSearch={onSearch} />
      <Switch>
        <Route exact path={match.path}>
          <ItemsList items={actors} />
        </Route>
        <Route path={`${match.path}/:actorId`}>
          <Actor />
        </Route>
      </Switch>
    </>
  );
};
