import type { SxProps, Theme } from "@mui/material";

export const searchInputSX: SxProps<Theme> = () => ({
  "& .MuiOutlinedInput-root fieldset": {
    border: "none",
  },
  "& .MuiOutlinedInput-root:hover fieldset": {
    border: "none",
  },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
    border: "none",
  },
});
