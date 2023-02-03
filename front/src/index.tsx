import { createRoot } from "react-dom/client";
import React from "react";
import { FocusStyleManager } from "@blueprintjs/core";

import App from "./app";

FocusStyleManager.onlyShowFocusOnTabs();

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

root.render(<App />);
