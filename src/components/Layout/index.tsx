import { Box } from "@mui/material";
import React from "react";
import { layoutSX } from "./styles/Layout";
import { SideNav } from "@components/SideNav";
import { Main } from "@components/Main";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={layoutSX}>
      <SideNav />
      <Main>{children}</Main>
    </Box>
  );
};
