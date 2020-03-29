import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { GridList, GridListTile, GridListTileBar, Typography } from "@material-ui/core";
import { Navigation } from "components/Navigation";

import { useFetchActors } from "./hooks";
import { useStyles } from "./styles";

export const ActorsList: React.FC = () => {
  const styles = useStyles();
  const match = useRouteMatch();
  const { actors, onSearch } = useFetchActors();

  return (
    <>
      <Navigation isSearchable={true} onSearch={onSearch} />
      {actors && actors.length > 0 ? (
        <GridList cellHeight="auto" cols={3} spacing={15}>
          {actors.map((actor) => (
            <GridListTile component={Link} to={`${match.path}/${actor.id}`} key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profilePath}`}
                alt={actor.name}
                className={styles.posterImg}
              />
              <GridListTileBar
                title={actor.name}
                subtitle={actor.knownFor?.map((elem) => elem.originalTitle).join(", ")}
              />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <Typography align="center" variant="h3">
          No results found
        </Typography>
      )}
    </>
  );
};
