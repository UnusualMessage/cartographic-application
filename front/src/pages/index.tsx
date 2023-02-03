import { NonIdealState } from "@blueprintjs/core";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authorization from "./Admin/Authorization";
import { references } from "@shared/assets/samples/references";
import {
  EmptyPage,
  Loader,
} from "../features/components/auxiliary/placeholders";
import Layout from "../widgets/Layout";

const View = lazy(() => import("../pages/User/View"));
const References = lazy(() => import("../pages/User/References"));
const Organizations = lazy(() => import("../pages/Admin/Organizations"));
const Users = lazy(() => import("../pages/Admin/Users"));

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

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={browserRouter} />
    </Suspense>
  );
};

export default Routing;
