import React from "react";
import { Button } from "@mui/material";
import { addNoteButtonSX } from "./styles/AddNoteButton";
import { combineSX } from "@utils/combineSX";

interface AddNoteButtonProps extends React.PropsWithChildren {
  color?: string;
}

export const AddNoteButton: React.FC<AddNoteButtonProps> = ({
  color = "",
  children,
}) => {
  return (
    <Button sx={combineSX([addNoteButtonSX(color)])} variant="contained">
      {children}
    </Button>
  );
};
