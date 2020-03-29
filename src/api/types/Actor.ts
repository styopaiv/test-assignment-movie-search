import * as t from "io-ts";

import { MovieRuntype } from "./Movie";

export const ActorRuntype = t.partial({
  profilePath: t.union([t.string, t.null]),
  adult: t.boolean,
  id: t.number,
  knownFor: t.array(MovieRuntype),
  name: t.string,
  popularity: t.number,
});

export type Actor = t.TypeOf<typeof ActorRuntype>;
