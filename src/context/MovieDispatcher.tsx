import { ReactNode, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";
import { initalMovieState } from "./InitalMovieState";
import { MovieContext } from "./MovieContext";

export interface MovieContextProps {
  children: ReactNode;
}

export interface MovieState {
  movies: MovieDataType[];
}

export interface MovieAction {
  type: string;
  id: string;
}

export const MovieList: MovieDataType[] = moviesData;


export const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOOGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};



export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initalMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
