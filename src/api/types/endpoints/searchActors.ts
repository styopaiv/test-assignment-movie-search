import * as t from "io-ts";

import { ActorRuntype } from "../Actor";

export const SearchActorsResponseRuntype = t.partial({
  page: t.number,
  results: t.array(ActorRuntype),
  totalPages: t.number,
  totalResults: t.number,
});

export const SearchActorsRequestRuntype = t.interface({
  query: t.string,
});

export type SearchActorsRequest = t.TypeOf<typeof SearchActorsRequestRuntype>;
export type SearchActorsResponse = t.TypeOf<typeof SearchActorsResponseRuntype>;
