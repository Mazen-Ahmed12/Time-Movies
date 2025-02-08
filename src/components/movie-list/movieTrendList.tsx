import React from "react";
import { MovieDataType } from "../../assets/data";
import { Box, Paper } from "@mui/material";
import MovieTrendCard from "../movie-card/MovieTrend";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  console.log("the trendingList is :", trendingList);
  return (
    <Box
      className="overflow-auto dark-scrollbar !h-full !w-full "
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {trendingList.map((movie) => (
        <Paper key={movie.id} elevation={0} className="!bg-transparent">
          <MovieTrendCard movie={movie} />
        </Paper>
      ))}
    </Box>
  );
};

export default MovieTrendList;
