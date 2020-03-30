import * as t from "io-ts";

import { MovieRuntype } from "../Movie";

export const SearchMoviesResponseRuntype = t.partial({
  page: t.number,
  results: t.array(MovieRuntype),
  totalPages: t.number,
  totalResults: t.number,
});

export const SearchMoviesRequestRuntype = t.interface({
  query: t.string,
});

export type SearchMoviesRequest = t.TypeOf<typeof SearchMoviesRequestRuntype>;
export type SearchMoviesResponse = t.TypeOf<typeof SearchMoviesResponseRuntype>;
