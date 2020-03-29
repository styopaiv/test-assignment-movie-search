import React from "react";
import { CardContent, CardMedia, CardHeader, Typography, Card } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { useStyles } from "./styles";
import { useFetchMovie } from "./hooks";

export const Movie: React.FC = () => {
  const styles = useStyles();
  const { movieId } = useParams();
  const movie = useFetchMovie(movieId as string);

  return movie ? (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.media}>
          <CardMedia
            className={styles.posterImg}
            component="img"
            image={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`}
            title={movie.title}
          />
        </div>
        <CardContent>
          <CardHeader
            title={movie.title}
            subheader={
              <Typography>
                {movie.releaseDate}, {movie.runtime}m
              </Typography>
            }
          />
          <Typography variant="h5">{movie.tagline}</Typography>
          <Typography className={styles.overview} variant="body2" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </div>
    </Card>
  ) : null;
};
