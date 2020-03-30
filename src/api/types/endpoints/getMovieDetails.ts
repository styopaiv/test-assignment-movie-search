import * as t from "io-ts";
import { MovieDetailsRuntype } from "../MovieDetails";

export type GetMovieDetailsResponse = t.TypeOf<typeof MovieDetailsRuntype>;
