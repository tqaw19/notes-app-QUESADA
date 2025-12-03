import type { SxProps, Theme } from "@mui/material";

export const dashboardPageContainerSX: SxProps<Theme> = (theme: Theme) => ({
  paddingInline: theme.spacing(6),
  paddingBlock: theme.spacing(4),

  ".search-input-container": {
    marginBottom: theme.spacing(4),
  },

  ".page-title-container": {
    marginBottom: theme.spacing(4),
  },
});
