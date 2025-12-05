import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { finalTheme } from "@theme/index";
import CssBaseline from "@mui/material/CssBaseline";
import PostItProvider from "@context/PostItProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={finalTheme}>
      <CssBaseline />
      <PostItProvider>
        <App />
      </PostItProvider>
    </ThemeProvider>
  </StrictMode>
);
