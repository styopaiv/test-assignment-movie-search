import React from "react";
import { CardContent, CardMedia, CardHeader, Typography, Card } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { useFetchActor } from "./hooks";

import { useStyles } from "./styles";

export const Actor: React.FC = () => {
  const styles = useStyles();
  const { actorId } = useParams();
  const actor = useFetchActor(actorId as string);

  return (
    <>
      {actor ? (
        <Card className={styles.cardContent}>
          <div className={styles.media}>
            <CardMedia
              alt={actor.name}
              className={styles.posterImg}
              component="img"
              image={`https://image.tmdb.org/t/p/w780/${actor.profilePath}`}
              title={actor.name}
            />
          </div>
          <CardContent>
            <CardHeader title={actor.name} />
            <Typography
              className={styles.overview}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {actor.biography}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};
