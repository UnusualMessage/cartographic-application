import "./index.scss";

import { FocusStyleManager, HotkeysProvider } from "@blueprintjs/core";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Routing from "../pages";

FocusStyleManager.onlyShowFocusOnTabs();

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

const App = () => {
  return (
    <HotkeysProvider>
      <Routing />
    </HotkeysProvider>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
