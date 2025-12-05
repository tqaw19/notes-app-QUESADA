import type { SxProps, Theme } from "@mui/material";

export const newPostItCardContainerSX = (
  bgColor: string | null
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "250px",
  height: "250px",
  border: "none",
  backgroundColor: (theme) => theme.customPalette[bgColor ?? ""] || bgColor,
  borderRadius: (theme) => theme.spacing(2),
});

export const newPostItCardContentSX: SxProps<Theme> = () => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export const newPostItCardActionsSX: SxProps<Theme> = (theme: Theme) => ({
  justifyContent: "flex-end",
  padding: theme.spacing(2),
  paddingTop: 0,
});

export const newPostItCardActionSX: SxProps<Theme> = () => ({
  minWidth: "35px",
  width: "35px",
  height: "35px",
  borderRadius: "30px",
  padding: "6px",
});
