import * as t from "io-ts";

const Genre = t.partial({
  id: t.number,
  name: t.string,
});

const Country = t.partial({
  iso31661: t.string,
  name: t.string,
});

const ProductionCompanies = t.partial({
  id: t.number,
  logoPath: t.union([t.null, t.string]),
  name: t.string,
  originCountry: t.string,
});

export const MovieDetailsRuntype = t.partial({
  adult: t.boolean,
  backdropPath: t.union([t.null, t.string]),
  belongsToCollection: t.union([t.null, t.object]),
  budget: t.number,
  genres: t.array(Genre),
  homepage: t.union([t.null, t.string]),
  id: t.number,
  imdbId: t.union([t.null, t.string]),
  originalLanguage: t.string,
  originalTitle: t.string,
  overview: t.union([t.null, t.string]),
  popularity: t.number,
  posterPath: t.union([t.null, t.string]),
  productionCompanies: t.array(ProductionCompanies),
  productionCountries: t.array(Country),
  releaseDate: t.string,
  revenue: t.number,
  runtime: t.union([t.null, t.number]),
  spokenLanguages: t.array(Country),
  status: t.string,
  tagline: t.union([t.null, t.string]),
  title: t.string,
  video: t.boolean,
  voteAverage: t.number,
  voteCount: t.number,
});

export type MovieDetails = t.TypeOf<typeof MovieDetailsRuntype>;
