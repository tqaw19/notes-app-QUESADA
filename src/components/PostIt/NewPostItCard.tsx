import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import {
  newPostItCardActionsSX,
  newPostItCardActionSX,
  newPostItCardContainerSX,
  newPostItCardContentSX,
} from "./styles/newPostItCard";
import { usePostItContext } from "@context/usePostItContext";
import type { PostIt } from "@types";

export const NewPostItCard = () => {
  const { actions, newNoteColor, setNewNoteColor } = usePostItContext();
  const [postItValue, setPostItValue] = useState<
    Pick<PostIt, "body" | "bgColor">
  >({
    body: "",
    bgColor: "",
  });

  const handleReset = () => {
    setPostItValue({ body: "", bgColor: "" });
    setNewNoteColor(null);
  };

  const handleSave = () => {
    if (postItValue.body.trim().length === 0) return;

    actions.addPostIt(postItValue.body, postItValue.bgColor, () => {
      handleReset();
    });
  };

  const card = (
    <>
      <CardContent sx={newPostItCardContentSX}>
        <TextField
          id="outlined-multiline-static"
          placeholder="Enter your ideas..."
          fullWidth
          multiline
          autoFocus={true}
          rows={6}
          value={postItValue.body || ""}
          onChange={(e) =>
            setPostItValue({
              body: e.target.value,
              bgColor: newNoteColor ?? "",
            })
          }
        />
      </CardContent>
      <CardActions sx={newPostItCardActionsSX}>
        <Button
          variant="outlined"
          sx={newPostItCardActionSX}
          onClick={handleReset}
        >
          <ClearIcon />
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={newPostItCardActionSX}
          onClick={() => {
            handleSave();
          }}
        >
          <CheckIcon sx={{ color: (theme) => theme.customPalette.grayLight }} />
        </Button>
      </CardActions>
    </>
  );

  return <Card sx={newPostItCardContainerSX(newNoteColor)}>{card}</Card>;
};
