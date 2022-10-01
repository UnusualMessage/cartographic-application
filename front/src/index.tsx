import { createRoot } from "react-dom/client";
import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { HotkeysProvider } from "@blueprintjs/core";

import "./index.scss";
import "ol/ol.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/table/lib/css/table.css";

const App = lazy(() => import("./pages/App"));

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <HotkeysProvider>
      <App />
    </HotkeysProvider>
  </BrowserRouter>
);
