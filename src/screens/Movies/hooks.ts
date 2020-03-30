import { useEffect, useState } from "react";

import { useApi } from "api/useApi";
import { Movie } from "api/types/Movie";
import { ListItem } from "types/ListItem";
import { useSearch } from "hooks/useSearch";

const transformMovies = (actors: Movie[]) => {
  return actors
    .filter((elem) => !!elem.posterPath)
    .reduce(
      (acc: ListItem[], elem) =>
        acc.concat({
          id: elem.id,
          title: elem.title,
          subtitle: elem.releaseDate,
          imagePath: elem.posterPath,
        }),
      [],
    );
};

export const useMoviesSearch = () => {
  const api = useApi();
  const { searchData, searchText, onSearch } = useSearch<Movie[]>(
    transformMovies,
    api?.searchMovies,
  );

  return { movies: searchData, onSearch, searchText };
};

export const useFetchUpcomingMovies = () => {
  const api = useApi();
  const [upcomingMovies, setUpcomingMovies] = useState<ListItem[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api?.getUpcomingMovies();

        const result = response?.results ? transformMovies(response.results) : [];

        setUpcomingMovies(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [api]);

  return { upcomingMovies };
};
