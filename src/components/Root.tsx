import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import { Movies } from "../screens/Movies";
import { Actors } from "../screens/Actors";

import { Header } from "./Header";

export const Root: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Redirect exact from="/" to="/movies" />
      </Switch>
    </Container>
  );
};
