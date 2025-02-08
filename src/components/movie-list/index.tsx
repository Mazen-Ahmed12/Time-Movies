import React from "react";
import { MovieDataType } from "../../assets/data";
import { Box, Paper } from "@mui/material";
import MovieCard from "../movie-card";

interface MovieListProps {
  recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {
  console.log("the recommendList is :", recommendList);
  return (
    <Box
      className="overflow-hidden dark-scrollbar !h-  !w-full "
      display="grid"
      gridTemplateColumns="repeat(4, minmax(300px, 1fr))"
    >
      {recommendList.map((movie) => (
        <Paper key={movie.id} elevation={0} className="!bg-transparent">
          <MovieCard movie={movie} />
        </Paper>
      ))}
    </Box>
  );
};

export default MovieList;
