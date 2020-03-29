import React from "react";

import { AppBar, Typography } from "@material-ui/core";

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Typography align="center" variant="h4">
        Movie Searcher
      </Typography>
    </AppBar>
  );
};
