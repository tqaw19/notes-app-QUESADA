import type { SxProps, Theme } from "@mui/material";

export const layoutSX: SxProps<Theme> = (theme: Theme) => ({
  display: "flex",
  backgroundColor: theme.customPalette.grayLight,
});
