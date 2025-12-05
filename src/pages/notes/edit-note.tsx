import React from "react";
import { Box, Button } from "@mui/material";
import { PageTitleComponent } from "@components/common";
import { editNotePageContainerSX } from "./styles/edit-note";

export const EditNotePage = () => {
  return (
    <Box sx={editNotePageContainerSX}>
      <Box className="page-title-container">
        <PageTitleComponent>Edit Note</PageTitleComponent>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
};
