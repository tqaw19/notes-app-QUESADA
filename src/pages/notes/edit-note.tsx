import React from "react";
import { Box, Button } from "@mui/material";
import { PageTitleComponent } from "@components/common";
import { editNotePageContainerSX } from "./styles/edit-note";
import { EditPostItCard } from "@components/PostIt";

export const EditNotePage = () => {
  return (
    <Box sx={editNotePageContainerSX}>
      <Box className="page-title-container">
        <PageTitleComponent>Edit Note</PageTitleComponent>
        <Button
          variant="contained"
          size="large"
          className="save-edit-post-it-button"
        >
          Save
        </Button>
      </Box>
      <Box className="edit-post-it-container">
        <EditPostItCard />
      </Box>
    </Box>
  );
};
