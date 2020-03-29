import React from "react";

import { ApiContext } from "./api/useApi";
import { tmdb as tmdbConfig } from "./config.json";
import { TmdbApi } from "./api/TmdbApi";

import { Root } from "./components/Root";
import { BrowserRouter } from "react-router-dom";

const api = new TmdbApi(tmdbConfig);

const App: React.FC = () => {
  return (
    <ApiContext.Provider value={api}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ApiContext.Provider>
  );
};

export default App;
