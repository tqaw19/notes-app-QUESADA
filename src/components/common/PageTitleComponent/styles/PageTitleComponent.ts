import type { SxProps, Theme } from "@mui/material";

export const pageTitleComponentSX: SxProps<Theme> = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
});
