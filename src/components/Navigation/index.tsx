import React, { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";

import { Paper, Tab, Input } from "@material-ui/core";

import { useStyles } from "./styles";

interface Props {
  onSearch: (event: SyntheticEvent) => void;
}

export const Navigation: React.FC<Props> = (props) => {
  const styles = useStyles();

  return (
    <Paper className={styles.content}>
      <div>
        <Tab component={NavLink} activeClassName="Mui-selected" to="/movies" label="Movies" />
        <Tab component={NavLink} activeClassName="Mui-selected" to="/actors" label="Actors" />
      </div>
      <Input className={styles.search} onChange={props.onSearch} placeholder="Search" />
    </Paper>
  );
};
