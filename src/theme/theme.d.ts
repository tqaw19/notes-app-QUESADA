import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    customPalette: {
      [key: string]: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    customPalette?: {
      [key: string]: string;
    };
  }
}
