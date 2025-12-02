import type { SxProps, Theme } from "@mui/material";

export const logoTitleSX: SxProps<Theme> = (theme: Theme) => ({
  paddingBlock: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  textAlign: "center",
  fontWeight: "bold",
});
