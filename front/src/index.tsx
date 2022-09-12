import { createRoot } from "react-dom/client";
import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./pages/App"));

import "./index.scss";
import "ol/ol.css";

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
