import React from "react";
import { Link } from "react-router-dom";

import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

import { useFetchUpcomingMovies } from "./hooks";

import { useStyles } from "./styles";

export const MoviesList: React.FC = () => {
  const styles = useStyles();
  const movies = useFetchUpcomingMovies();

  return (
    <>
      <GridList cellHeight="auto" cols={3} spacing={15}>
        {movies
          ? movies.map((movie) => (
              <GridListTile component={Link} to={`/movies/${movie.id}`} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                  alt={movie.title}
                  className={styles.posterImg}
                />
                <GridListTileBar title={movie.title} subtitle={movie.releaseDate} />
              </GridListTile>
            ))
          : []}
      </GridList>
    </>
  );
};
