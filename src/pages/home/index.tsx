import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../../Layout";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieTrendList from "../../components/movie-list/MovieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/MovieContext";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newlist = movies.filter((movie) =>
      movie?.title?.toLowerCase()?.includes(search?.trim()?.toLowerCase() || "") //try this if you meet problem with whitespace 
  );
  setSearchList(newlist); 
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          className="flex w-screen justify-center items-center p-1 !bg-[#10141f] border-none"
        >
          <InputBase
            placeholder="type what you want to search Here..."
            className="ml-1 flex-1 !text-zinc-400"
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon
                  className="text-zinc-400"
                  aria-label="search"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box className="py-2 px-4">
        {search === "" ? (
          <Box className="w-full h-full">
            <Box className="w-full h-full">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box className="w-full h-full">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended for you
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box className="w-full h-full">
            <Typography>found {searchList.length} results for "{search}"{""}</Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
