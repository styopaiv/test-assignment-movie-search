import { useState, useEffect } from "react";

import { useApi } from "api/useApi";
import { GetMovieDetailsResponse } from "api/types/endpoints/getMovieDetails";

export const useFetchMovie = (movieId: string) => {
  const [actor, saveMovie] = useState<GetMovieDetailsResponse | undefined>();
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

  return actor;
};
