import * as t from "io-ts";

import { ApiClient } from "./ApiClient";

import {
  GetUpcomingMoviesResponseRuntype,
  GetUpcomingMoviesResponse,
} from "./types/endpoints/getUpcomingMovies";
import {
  SearchActorsRequest,
  SearchActorsResponse,
  SearchActorsRequestRuntype,
  SearchActorsResponseRuntype,
} from "./types/endpoints/searchActors";
import { GetActorDetailsResponse } from "./types/endpoints/getActorDetails";
import { GetMovieDetailsResponse } from "./types/endpoints/getMovieDetails";

export class TmdbApi extends ApiClient {
  getUpcomingMovies = this.createRequest<void, GetUpcomingMoviesResponse>(
    { url: "/movie/upcoming", method: "get" },
    t.void,
    GetUpcomingMoviesResponseRuntype,
  );

  searchActors = this.createRequest<SearchActorsRequest, SearchActorsResponse>(
    { url: "/search/person", method: "get" },
    SearchActorsRequestRuntype,
    SearchActorsResponseRuntype,
  );

  getActorDetails = (personId: string) =>
    this.createRequest<void, GetActorDetailsResponse>(
      { url: `/person/${personId}`, method: "get" },
      SearchActorsRequestRuntype,
      SearchActorsResponseRuntype,
    )();

  getMovieDetails = (movieId: string) =>
    this.createRequest<void, GetMovieDetailsResponse>(
      { url: `/movie/${movieId}`, method: "get" },
      SearchActorsRequestRuntype,
      SearchActorsResponseRuntype,
    )();
}
