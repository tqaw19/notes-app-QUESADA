import type { SxProps, Theme } from "@mui/material";

export const postItCardContainerSX = (bgColor: string): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "250px",
  height: "250px",
  border: "none",
  backgroundColor: (theme) => theme.customPalette[bgColor] || bgColor,
  borderRadius: (theme) => theme.spacing(2),
});

export const postItCardActionsSX: SxProps<Theme> = (theme: Theme) => ({
  justifyContent: "space-between",
  padding: theme.spacing(2),

  ".postitcard-date": {
    fontSize: "0.875rem",
    color: theme.customPalette.grayDark,
  },
});

export const postItCardSaveButtonSX: SxProps<Theme> = (theme: Theme) => ({
  borderRadius: theme.spacing(4),
  minWidth: "35px",
  width: "35px",
  height: "35px",
});
