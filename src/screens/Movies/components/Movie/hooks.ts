import { useState, useEffect } from "react";

import { useApi } from "api/useApi";
import { MovieDetails } from "api/types/MovieDetails";

export const useFetchMovie = (movieId: string) => {
  const [movie, saveMovie] = useState<MovieDetails | undefined>();
  const api = useApi();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api?.getMovieDetails(movieId);

        saveMovie(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [api, movieId]);

  return movie;
};
