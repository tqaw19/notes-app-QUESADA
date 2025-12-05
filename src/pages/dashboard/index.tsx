import React from "react";
import { Box } from "@mui/material";
import { SearchInput } from "./SearchInput";
import { dashboardPageContainerSX } from "./styles/dashboard";
import { PageTitleComponent } from "@components/common";
import { PostItGrid } from "@components/PostIt/PostItGrid";

export const DashboardPage = () => {
  return (
    <Box sx={dashboardPageContainerSX}>
      <Box className="search-input-container">
        <SearchInput />
      </Box>

      <Box className="page-title-container">
        <PageTitleComponent>Notes</PageTitleComponent>
      </Box>

      <Box className="post-it-list-container">
        <PostItGrid />
      </Box>
    </Box>
  );
};
