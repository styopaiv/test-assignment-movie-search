import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { ListItem } from "types/ListItem";

import { GridList, GridListTile, GridListTileBar, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface Props {
  items: ListItem[];
}

export const ItemsList: React.FC<Props> = (props) => {
  const styles = useStyles();
  const match = useRouteMatch();

  return (
    <>
      {props.items && props.items.length > 0 ? (
        <GridList cellHeight="auto" cols={3} spacing={15}>
          {props.items.map((item) => (
            <GridListTile component={Link} to={`${match.path}/${item.id}`} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.imagePath}`}
                alt={item.title}
                className={styles.image}
              />
              <GridListTileBar title={item.title} subtitle={item.subtitle} />
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
