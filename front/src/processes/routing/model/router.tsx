import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { RequireAuthentication } from "@features/auth";
import Authorization from "@pages/Authorization";
import { references as referencesRecord } from "@pages/References";
import { isObjectKey } from "@shared/lib";
import { Reference } from "@shared/misc";
import { EmptyPage } from "@shared/ui";
import { Layout } from "@widgets/index";

const Monitoring = lazy(() => import("@pages/Monitoring"));
const References = lazy(() => import("@pages/References"));
const Print = lazy(() => import("@pages/PrintSchema"));
const Home = lazy(() => import("@pages/Admin/Home"));

const references: Reference[] = [];

for (const key in referencesRecord) {
  if (isObjectKey(key, referencesRecord)) {
    references.push(referencesRecord[key]);
  }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EmptyPage />,
    errorElement: <EmptyPage />,
  },

  {
    path: "/system",
    children: [
      {
        path: "print",
        element: <Print />,
      },

      {
        path: "monitoring",
        element: (
          <RequireAuthentication roles={[1, 2, 4]}>
            <Layout />
          </RequireAuthentication>
        ),
        errorElement: <EmptyPage />,
        children: [
          {
            path: "",
            element: <Monitoring />,
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