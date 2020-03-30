import * as t from "io-ts";

import { ActorDetailsRuntype } from "../ActorDetails";

export type GetActorDetailsResponse = t.TypeOf<typeof ActorDetailsRuntype>;
