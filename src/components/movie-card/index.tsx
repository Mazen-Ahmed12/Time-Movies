import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { MovieContext } from "../../context/MovieContext";

interface MovieCardProps {
  movie: MovieDataType;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE_BOOKMARK", id });
  };
  return (
    <Card
      variant="outlined"
      className="!bg-transparent grayShade my-3 border-none w-full "
    >
      <CardContent className="p-0 relative w-full">
        <Box>
          {/*  box flex = grid container   */}
          <Box
            component="img"
            src={movie.thumbnail.regular.large}
            alt=""
            className="!w-[400px] h-[180px] !p-0 !m-0 rounded-lg"
          />
          <Box className="flex flex-row flex-[8]">
            <Typography
              fontSize={10}
              className="grayShade"
              aria-label="year of movie"
            >
              {movie.year}
            </Typography>
            <Box className="w-6 h-6 rounded-full" />
            <Box
              component="img"
              src={movie.category === "Movie" ? "slideshow.svg" : "liveTv.svg"}
              alt=""
              className="w-4 h-4"
            />
            <Typography
              fontSize={10}
              className="grayShade pl-2"
              aria-label="category"
            >
              {movie.category}
            </Typography>
            <Box className="w-6 h-6 rounded-full" />
            <Typography fontSize={10} className="grayShade" aria-label="rating">
              {movie.rating}
            </Typography>
          </Box>
          <Typography padding={0} className="grayShade" aria-label="title">
            {movie.title}
          </Typography> 
        </Box>
      </CardContent>
    </Card>
  );
};
export default MovieCard;
