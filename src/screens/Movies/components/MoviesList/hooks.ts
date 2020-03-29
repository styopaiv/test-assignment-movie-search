import { useEffect, useState } from "react";

import { useApi } from "api/useApi";
import { Movie } from "api/types/Movie";

export const useFetchUpcomingMovies = () => {
  const api = useApi();
  const [data, setData] = useState<Movie[] | undefined>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api?.getUpcomingMovies();

        const result = response?.results?.filter((elem) => !!elem.posterPath);

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [api]);

  return data;
};
