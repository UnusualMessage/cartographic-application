import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { RequireAuthentication } from "@features/auth";
import Authorization from "@pages/Authorization";
import { references } from "@pages/User/References";
import { EmptyPage } from "@shared/ui";
import { Layout } from "@widgets/index";

const View = lazy(() => import("@pages/User/View"));
const References = lazy(() => import("@pages/User/References"));
const Home = lazy(() => import("@pages/Admin/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuthentication roles={[1, 2, 4]}>
        <Layout />
      </RequireAuthentication>
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
      <RequireAuthentication roles={[8]}>
        <Layout />
      </RequireAuthentication>
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
