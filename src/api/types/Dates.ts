import * as t from "io-ts";

export const Dates = t.interface({
  maximum: t.string,
  minimum: t.string,
});
