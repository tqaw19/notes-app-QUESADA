import React from "react";
import { Box } from "@mui/material";
import { sideNavSX } from "./styles/SideNav";
import { LogoTitle } from "./LogoTitle";
import { AddNoteButton } from "./AddNoteButton";
import { theme } from "@theme/index";

export const SideNav = () => {
  const buttonColors = [
    theme.customPalette.yellow,
    theme.customPalette.orange,
    theme.customPalette.purple,
    theme.customPalette.blue,
    theme.customPalette.green,
  ];

  return (
    <Box sx={sideNavSX}>
      <LogoTitle />
      <Box className="add-note-button-container">
        <AddNoteButton>+</AddNoteButton>
      </Box>
      <Box className="add-note-with-colors-container">
        {buttonColors.map((color, index) => (
          <AddNoteButton key={index} color={color} />
        ))}
      </Box>
    </Box>
  );
};
