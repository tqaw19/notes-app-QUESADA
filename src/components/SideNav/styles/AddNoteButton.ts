import type { SxProps, Theme } from "@mui/material";

export const addNoteButtonSX = (color: string): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: color ? "30px" : "50px",
  height: color ? "30px" : "50px",
  minWidth: color ? "30px" : "50px",
  borderRadius: (theme) => theme.spacing(10),
  backgroundColor: color || undefined,

  "&.MuiButton-contained": {
    boxShadow: color ? "none" : undefined,
  },
  fontSize: "24px",
});
