import * as t from "io-ts";

export const ActorDetailsRuntype = t.partial({
  birthday: t.string,
  knownForDepartment: t.string,
  deathday: t.union([t.null, t.string]),
  id: t.number,
  name: t.string,
  alsoKnownAs: t.array(t.string),
  gender: t.number,
  biography: t.string,
  popularity: t.number,
  placeOfBirth: t.union([t.null, t.string]),
  profilePath: t.union([t.null, t.string]),
  adult: t.boolean,
  imdbId: t.string,
  homepage: t.union([t.null, t.string]),
});

export type ActorDetails = t.TypeOf<typeof ActorDetailsRuntype>;
