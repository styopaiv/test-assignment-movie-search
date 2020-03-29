import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import { ActorsList } from "./components/ActorsList";
import { Actor } from "./components/Actor";

export const Actors: React.FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={match.path}>
          <ActorsList />
        </Route>
        <Route path={`${match.path}/:actorId`}>
          <Actor />
        </Route>
      </Switch>
    </>
  );
};
