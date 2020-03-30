import { useEffect, useState, SyntheticEvent } from "react";
import debounce from "lodash.debounce";

import { ListItem } from "types/ListItem";

export const useSearch = <T>(
  transformData: (data: T) => ListItem[],
  request?: (requestData: { query: string }) => Promise<{ results?: T }>,
) => {
  const [searchData, setData] = useState<ListItem[]>([]);
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
        const response = await request?.({ query: searchText });

        const result = response?.results ? transformData(response.results) : [];

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
  }, [request, searchText, transformData]);

  return { searchData, onSearch, searchText };
};
