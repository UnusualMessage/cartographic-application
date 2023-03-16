import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Authorization from "@pages/Authorization";
import Authorized from "@pages/Authorization/ui/Authorized";
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
