import type { Theme } from "@mui/material";

export const postItGridContainerSX = (theme: Theme) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(4),
});
