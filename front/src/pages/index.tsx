import { NonIdealState } from "@blueprintjs/core";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EmptyPage, Loader } from "@shared/ui";
import { Layout } from "@widgets/index";

import Authorization from "./Admin/Authorization";
import { references } from "./User/References";

const View = lazy(() => import("./User/View"));
const References = lazy(() => import("./User/References"));
const OrganizationsPage = lazy(() => import("./Admin/OrganizationsPage"));
const Users = lazy(() => import("./Admin/Users"));

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
    element: <OrganizationsPage />,
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
