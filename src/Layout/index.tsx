import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children} : LayoutProps) => {
  return (
    <Box className="bg-[#10141f] !w-screen !fixed !inset-0  flex flex-col lg:flex-row text-white p-3 g-3 overflow-overflow-auto h-screen">
      <Sidebar/>
      <Box className="w-auto h-auto overflow-scroll dark-scrollbar px-4">{children}</Box>
    </Box>
    
  )
}

export default Layout