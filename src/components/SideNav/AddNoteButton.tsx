import React from "react";
import { Button } from "@mui/material";
import { addNoteButtonSX } from "./styles/AddNoteButton";

interface AddNoteButtonProps extends React.PropsWithChildren {
  color?: string;
}

export const AddNoteButton: React.FC<AddNoteButtonProps> = ({
  color = "",
  children,
}) => {
  return (
    <Button sx={addNoteButtonSX(color)} variant="contained">
      {children}
    </Button>
  );
};
