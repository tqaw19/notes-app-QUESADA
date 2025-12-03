import { Typography } from "@mui/material";
import React, { type PropsWithChildren } from "react";
import { pageTitleComponentSX } from "./styles/PageTitleComponent";

export const PageTitleComponent: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Typography variant="h3" sx={pageTitleComponentSX}>
      {children}
    </Typography>
  );
};
