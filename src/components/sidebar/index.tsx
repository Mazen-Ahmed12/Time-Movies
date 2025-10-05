import React from "react";
import { Home, Slideshow, LiveTv, Bookmark } from "@mui/icons-material";
import { useLocation } from "react-router";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const navLink = [
  {
    name: "Home",
    icon: Home,
    link: "/",
  },
  {
    name: "Movies",
    icon: Slideshow,
    link: "/movies",
  },
  {
    name: "TvSeries",
    icon: LiveTv,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: Bookmark,
    link: "/bookmark",
  },
];
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box className="bg-gray-900 p-2 border-r-2 border-gray-900 flex flex-row lg:flex-col items-center justify-between w-full lg:w-[200px]">
      <Box className="flex flex-row lg:flex-col g-5 justify-center items-center lx:justify-center lx:items-center w-full">
        <Box className="hidden sm:block ">
          <Typography
            variant="h5"
            component="h1"
            my={3}
            fontWeight={400}
            fontSize={18}
          >
            Time Movies
          </Typography>
        </Box>
        <Box className="py-0 lx:y-16px flex flex-row lg:flex-col g-4 w-full">
          {navLink.map((item) => (
            <Link
              component={RouterLink as React.ElementType}
              key={item.name}
              to={item.link}
            >
              <Box className="flex justify-center items-center g-4 py-4 px-1.5 text-white no-underline decoration-none">
                <item.icon
                  aria-label={item.name}
                  className="w-5 `filter ${pathname === item.link ? 'invert-[58%] sepia-[14%] saturate-[3316%] hue-rotate-[215deg] brightness-[91%] contrast-[87%]' : 'invert-[84%]'}`"
                />
                <Box className="hidden lg:block pl-2">
                  <Typography>{item.name}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
