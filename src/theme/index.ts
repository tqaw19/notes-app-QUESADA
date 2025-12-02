import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const base = {
  customPalette: {
    orange: "#fdba74",
    yellow: "#fde047",
    yellowLight: "#fef9c3",
    pink: "#ec9b9b",
    green: "#d9f99d",
    blue: "#67e8f9",
    purple: "#be9efc",
    black: "#111827",
    gray: "#9199a7",
    grayLight: "#f7f8fc",
  },
  status: {
    danger: orange[500],
  },
};

export const theme = createTheme(base);

export const finalTheme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          backgroundColor: theme.customPalette.black,
          color: theme.palette.primary.contrastText,
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
  },
});
