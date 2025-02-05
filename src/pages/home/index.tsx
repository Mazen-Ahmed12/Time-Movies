import React, { SetStateAction, useState } from "react";
import Layout from "../../Layout";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";

const Home = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          className="flex justify-center items-center p-1 !bg-[#10141f] border-none"
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
          <Box className="w-full">
            <Box className="w-full">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box className="w-full">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                recommended for you
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box className="w-full">
            <Typography>
              found
            </Typography>
            </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
