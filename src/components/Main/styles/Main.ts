import type { SxProps, Theme } from "@mui/material";

export const mainSX: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(2),
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(3),
});
