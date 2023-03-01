import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EmptyPage, Loader } from "@shared/ui";
import { UserLayout, AdminLayout } from "@widgets/index";

import Authorization from "./Authorization";
import { references } from "./User/References";

const View = lazy(() => import("./User/View"));
const References = lazy(() => import("./User/References"));
const Organizations = lazy(() => import("./Admin/Organizations"));
const Users = lazy(() => import("./Admin/Users"));
const Home = lazy(() => import("./Admin/Home"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
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
    errorElement: <EmptyPage />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <EmptyPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "organizations",
        element: <Organizations />,
      },

      {
        path: "users",
        element: <Users />,
      },
    ],
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
