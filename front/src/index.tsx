import { createRoot } from "react-dom/client";
import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  FocusStyleManager,
  HotkeysProvider,
  NonIdealState,
} from "@blueprintjs/core";

import "./index.scss";
import "ol/ol.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/table/lib/css/table.css";

import Layout from "./components/common/Layout";
import { references } from "./shared/assets/samples/references";
import Authorization from "./pages/Admin/Authorization";
import { EmptyPage, Loader } from "./components/auxiliary/placeholders";

const View = lazy(() => import("./pages/User/View"));

const References = lazy(() => import("./pages/User/References"));

const Organizations = lazy(() => import("./pages/Admin/Organizations"));
const Users = lazy(() => import("./pages/Admin/Users"));

FocusStyleManager.onlyShowFocusOnTabs();

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <EmptyPage />,
    children: [
      {
        path: "",
        element: <View />,
      },

      {
        path: "references",
        element: <References />,

        children: references.map((reference) => {
          return {
            element: reference.component,
            path: reference.link,
          };
        }),
      },
    ],
  },

  {
    path: "/authorization",
    element: <Authorization />,
    errorElement: (
      <NonIdealState icon={"search"} title={"Страницы не существует!"} />
    ),
  },

  {
    path: "/admin/organizations",
    element: <Organizations />,
    errorElement: (
      <NonIdealState icon={"search"} title={"Страницы не существует!"} />
    ),
  },

  {
    path: "/admin/users",
    element: <Users />,
    errorElement: (
      <NonIdealState icon={"search"} title={"Страницы не существует!"} />
    ),
  },
]);

root.render(
  <HotkeysProvider>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={browserRouter} />
    </React.Suspense>
  </HotkeysProvider>
);
