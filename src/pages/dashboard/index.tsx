import React from "react";
import { Box } from "@mui/material";
import { SearchInput } from "./SearchInput";
import { dashboardPageContainerSX } from "./styles/dashboard";
import { PageTitleComponent } from "@components/common";

export const DashboardPage = () => {
  return (
    <Box sx={dashboardPageContainerSX}>
      <Box className="search-input-container">
        <SearchInput />
      </Box>

      <Box className="page-title-container">
        <PageTitleComponent>Notes</PageTitleComponent>
      </Box>
    </Box>
  );
};
