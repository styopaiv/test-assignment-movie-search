import { useEffect, useState, SyntheticEvent } from "react";
import debounce from "lodash.debounce";

import { useApi } from "api/useApi";
import { Actor } from "api/types/Actor";

export const useFetchActors = () => {
  const api = useApi();
  const [data, setData] = useState<Actor[]>();
  const [searchText, setSearchText] = useState("");

  const onSearch = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    const debouncedSearch = debounce(() => {
      setSearchText(target.value);
    }, 400);

    debouncedSearch();
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api?.searchActors({ query: searchText });

        const result = response?.results?.filter((elem) => !!elem.profilePath);

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchText) {
      fetch();
    } else {
      setData([]);
    }
  }, [api, searchText]);

  return { actors: data, onSearch };
};
