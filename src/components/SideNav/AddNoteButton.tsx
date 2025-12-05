import React from "react";
import { Button } from "@mui/material";
import { addNoteButtonSX } from "./styles/AddNoteButton";
import { usePostItContext } from "@context/usePostItContext";

interface AddNoteButtonProps extends React.PropsWithChildren {
  color?: string;
}

export const AddNoteButton: React.FC<AddNoteButtonProps> = ({
  color = "",
  children,
}) => {
  const { setNewNoteColor } = usePostItContext();
  return (
    <Button
      sx={addNoteButtonSX(color)}
      variant="contained"
      onClick={() => setNewNoteColor(color ?? null)}
    >
      {children}
    </Button>
  );
};
