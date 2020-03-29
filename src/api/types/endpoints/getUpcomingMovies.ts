import * as t from "io-ts";

import { MovieRuntype } from "../Movie";
import { Dates } from "../Dates";

export const GetUpcomingMoviesResponseRuntype = t.partial({
  page: t.number,
  results: t.array(MovieRuntype),
  dates: Dates,
  totalPages: t.number,
  totalResults: t.number,
});

export type GetUpcomingMoviesResponse = t.TypeOf<typeof GetUpcomingMoviesResponseRuntype>;
