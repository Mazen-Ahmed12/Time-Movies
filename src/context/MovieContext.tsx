import React, { createContext } from "react";
import { MovieState, MovieAction } from "./MovieDispatcher"; // Adjust paths as needed
import { initalMovieState } from "./InitalMovieState"; // Adjust paths as needed

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initalMovieState,
  dispatch: () => {},
});
