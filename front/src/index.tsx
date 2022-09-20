import { createRoot } from "react-dom/client";
import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const App = lazy(() => import("./pages/App"));
import { ComponentPreviews, useInitial } from "./dev";

import "./index.scss";
import "ol/ol.css";

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

root.render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </DevSupport>
);
