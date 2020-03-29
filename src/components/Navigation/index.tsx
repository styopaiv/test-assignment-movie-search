import React, { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";

import { Paper, Tab, Input, makeStyles } from "@material-ui/core";

interface Props {
  isSearchable?: boolean;
  onSearch?: (event: SyntheticEvent) => void;
}

const useStyles = makeStyles({
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
  },
  search: {
    lineHeight: "30px",
  },
});

export const Navigation: React.FC<Props> = (props) => {
  const styles = useStyles();

  return (
    <Paper className={styles.content}>
      <div>
        <Tab
          component={NavLink}
          activeClassName="Mui-selected"
          to="/movies"
          label="Upcoming Movies"
        />
        <Tab component={NavLink} activeClassName="Mui-selected" to="/actors" label="Actors" />
      </div>
      {props.isSearchable && (
        <Input className={styles.search} onChange={props.onSearch} placeholder="Search" />
      )}
    </Paper>
  );
};
