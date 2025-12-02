import { Box } from "@mui/material";
import React from "react";
import { mainSX } from "./styles/Main";

interface MainProps extends React.PropsWithChildren {}

export const Main: React.FC<MainProps> = ({ children }) => {
  return <Box sx={mainSX}>{children}</Box>;
};
