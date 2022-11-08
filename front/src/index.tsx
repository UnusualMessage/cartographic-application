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

import Loader from "./components/auxiliary/Loader";
import Layout from "./components/common/Layout";
import { references } from "./assets/data/references";
import EmptyPage from "./components/auxiliary/EmptyPage";
import { HubConnectionBuilder } from "@microsoft/signalr";

const Admin = lazy(() => import("./pages/Admin"));
const View = lazy(() => import("./pages/User/View"));
const Edit = lazy(() => import("./pages/User/Edit"));

const References = lazy(() => import("./pages/User/References"));

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
        path: "edit",
        element: <Edit />,
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
    path: "/admin",
    element: <Admin />,
    errorElement: (
      <NonIdealState icon={"search"} title={"Страницы не существует!"} />
    ),
  },
]);

const connection = new HubConnectionBuilder()
  .withUrl("https://localhost:5443/hubs/notification")
  .build();
connection.on("ReceiveMessageHandler", (message) => {
  connection.invoke("SendMessage", "", message).catch(function (err) {
    return console.error(err.toString());
  });
  alert(message);
});

void connection.start().then(() => {
  connection.invoke("SendMessage", "", "Hello").catch(function (err) {
    return console.error(err.toString());
  });
});

root.render(
  <HotkeysProvider>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={browserRouter} />
    </React.Suspense>
  </HotkeysProvider>
);
