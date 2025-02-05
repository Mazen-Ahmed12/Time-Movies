import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children} : LayoutProps) => {
  return (
    <Box className="bg-[#10141f]  flex flex-col lg:flex-row text-white p-3 g-3 overflow-hidden h-screen w-screen">
      <Sidebar/>
      <Box className="w-full ml-6">{children}</Box>
    </Box>
    
  )
}

export default Layout