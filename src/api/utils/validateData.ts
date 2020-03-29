import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";
import { fold, left } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

export const validateData = (dataType: t.Mixed, data?: Record<any, any>) => {
  const onLeft = (error: t.Errors) => {
    console.error(PathReporter.report(left(error)));
  };

  if (data) {
    pipe(dataType.decode(data), fold(onLeft, t.identity));
  }
};
