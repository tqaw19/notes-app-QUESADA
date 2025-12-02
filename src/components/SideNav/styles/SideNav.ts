import type { SxProps, Theme } from "@mui/material";

export const sideNavSX: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  width: "150px",

  ".add-note-button-container": {
    paddingBlock: theme.spacing(4),
  },

  ".add-note-with-colors-container": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
});
