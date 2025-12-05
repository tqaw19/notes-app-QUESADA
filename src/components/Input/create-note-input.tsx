import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
// import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { usePostItState } from "@hooks/usePostItState";
import type { PostIt } from "@types";
import {
  createNoteInputActionsButtonSX,
  createNoteInputActionsSX,
  createNoteInputContainerSX,
} from "./styles/create-note-input";

export const CreateNoteInput = () => {
  const { actions } = usePostItState();
  const [postItValue, setPostItValue] = useState<
    Pick<PostIt, "body" | "bgColor">
  >({
    body: "",
    bgColor: "",
  });

  const handleSave = () => {
    if (postItValue.body.trim().length === 0) return;
    actions.addPostIt(postItValue.body, postItValue.bgColor);
  };

  return (
    <Box sx={createNoteInputContainerSX}>
      {/* Change this component to a card and add bgcolor, inside goes textarea and action buttons */}
      <TextField
        id="outlined-multiline-static"
        fullWidth
        multiline
        rows={8}
        value={postItValue.body || ""}
        onChange={(e) =>
          setPostItValue({ body: e.target.value, bgColor: postItValue.bgColor })
        }
      />
      <Box sx={createNoteInputActionsSX}>
        <Button
          variant="outlined"
          sx={createNoteInputActionsButtonSX}
          onClick={() => {
            setPostItValue({ body: "", bgColor: postItValue.bgColor });
          }}
        >
          <ClearIcon />
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={createNoteInputActionsButtonSX}
          onClick={() => {
            handleSave();
          }}
        >
          <CheckIcon sx={{ color: (theme) => theme.customPalette.grayLight }} />
        </Button>
      </Box>
    </Box>
  );
};
