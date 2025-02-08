import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { MovieContext } from "../../context/MovieContext";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

interface MovieTrendCardProps {
  movie: MovieDataType;
}
const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id:string) => {
    dispatch({ type: "TOGGLE_BOOKMARK", id });
  }

  return (
    <Card key={movie.id} elevation={0} className="!bg-transparent">
      <CardContent className="flex relative !p-1  dark-scrollbar">
        <Box position="relative" display="inline-block">
          {/* Image */}
          <Box
            component="img"
            src={movie.thumbnail.regular.large}
            alt=""
            className="w-full h-full rounded-lg"
          />

          {/* Dark Overlay */}
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bgcolor="rgba(0,0,0,0.6)"
            borderRadius="8px"
          />

          {/* Year Text */}
          <Stack
            mt="6"
            spacing={0}
            position="absolute"
            bottom={0}
            left={8}
            right={0}
            p={4}
          >
            <Box className="flex items-center gap-2">
              <Typography
                fontSize={10}
                className="grayShade" 
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
              <Box className="w-4 h-4 rounded-full"/>
              <Box
                component="img"
                src={
                  movie.category === "Movie" ? "slideshow.svg" : "liveTv.svg"
                }
                alt=""
                className="w-4 h-4"
              />
              <Typography fontSize={10} className="grayShade" aria-label="category">
                {movie.category}
              </Typography>
              <Box className="w-4 h-4 rounded-full"/>
              <Typography fontSize={10} className="grayShade" aria-label="rating">
                {movie.rating}
              </Typography>
            </Box>
            <Typography padding={0} className="grayShade" aria-label="title">
              {movie.title}
            </Typography>
          </Stack>
          <Box className="flex  items-start justify-end absolute bottom-0 right-0 left-0 top-0 p-4">
            <Box
              className="p-4 bg-black rounded-full cursor-pointer hover:opacity-80"
              onClick={() => handleToggleBookmark(movie.id)}
            >
              {movie.isBookmarked ? (
                <Bookmark className="grayShade" />
              ) : (
                <BookmarkBorder className="grayShade" />
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default MovieTrendCard;
