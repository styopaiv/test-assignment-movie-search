import { useApi } from "api/useApi";
import { Actor } from "api/types/Actor";
import { ListItem } from "types/ListItem";
import { useSearch } from "hooks/useSearch";

const transformActors = (actors: Actor[]) => {
  return actors
    .filter((elem) => !!elem.profilePath)
    .reduce(
      (acc: ListItem[], elem) =>
        acc.concat({
          id: elem.id,
          title: elem.name,
          subtitle: elem.knownFor?.map((movie) => movie.title).join(", "),
          imagePath: elem.profilePath,
        }),
      [],
    );
};

export const useActorsSearch = () => {
  const api = useApi();
  const { searchData, onSearch } = useSearch<Actor[]>(transformActors, api?.searchActors);

  return { actors: searchData, onSearch };
};
