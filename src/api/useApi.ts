import { createContext, useContext } from "react";

import { TmdbApi } from "./TmdbApi";

export const ApiContext = createContext<TmdbApi | null>(null);

export const useApi = () => {
  const api = useContext(ApiContext);

  return api;
};
