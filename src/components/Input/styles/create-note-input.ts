import type { SxProps, Theme } from "@mui/material";

export const createNoteInputContainerSX: SxProps<Theme> = () => ({
  position: "relative",
  minWidth: "300px",
  width: "300px",
  height: "fit-content",
});

export const createNoteInputActionsSX: SxProps<Theme> = () => ({
  position: "absolute",
  bottom: 0,
  width: "fill-available",
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
  fontSize: "0.75rem",
  margin: "8px 16px",
  borderRadius: "8px",
  background: "rgba(255, 255, 255)",
});

export const createNoteInputActionsButtonSX: SxProps<Theme> = () => ({
  minWidth: "35px",
  width: "35px",
  height: "35px",
  borderRadius: "30px",
  padding: "6px",
});
