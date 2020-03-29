import * as t from "io-ts";

export const MovieRuntype = t.partial({
  posterPath: t.union([t.string, t.null]),
  adult: t.boolean,
  overview: t.string,
  releaseDate: t.string,
  genreIds: t.array(t.number),
  id: t.number,
  originalTitle: t.string,
  originalLanguage: t.string,
  title: t.string,
  backdropPath: t.union([t.string, t.null]),
  popularity: t.number,
  voteCount: t.number,
  video: t.boolean,
  voteAverage: t.number,
});

export type Movie = t.TypeOf<typeof MovieRuntype>;
