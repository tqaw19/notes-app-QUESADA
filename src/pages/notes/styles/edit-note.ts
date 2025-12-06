import type { SxProps, Theme } from "@mui/material";

export const editNotePageContainerSX: SxProps<Theme> = (theme: Theme) => ({
  paddingInline: theme.spacing(6),
  paddingBlock: theme.spacing(4),

  ".page-title-container": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),

    ".save-edit-post-it-button": {
      borderRadius: theme.spacing(1),
      textTransform: "none",
      fontWeight: 700,
    },
  },
});
