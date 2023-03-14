import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EmptyPage, Loader } from "@shared/ui";
import { Layout } from "@widgets/index";

import Authorization from "./Authorization";
import Authorized from "./Authorization/ui/Authorized";
import { references } from "./User/References";

const View = lazy(() => import("./User/View"));
const References = lazy(() => import("./User/References"));
const Home = lazy(() => import("./Admin/Home"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authorized roles={[1, 2, 4]}>
        <Layout />
      </Authorized>
    ),
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
    element: (
      <Authorized roles={[8]}>
        <Layout />
      </Authorized>
    ),
    errorElement: <EmptyPage />,
    children: [
      {
        path: "",
        element: <Home />,
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
