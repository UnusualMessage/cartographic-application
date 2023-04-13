import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { RequireAuthentication } from "@features/auth";
import Authorization from "@pages/Authorization";
import { references as referencesRecord } from "@pages/References";
import { reports as reportsRecord } from "@pages/Reports";
import { routes } from "@shared/assets";
import { isObjectKey } from "@shared/lib";
import { Reference, Report } from "@shared/misc";
import { EmptyPage } from "@shared/ui";
import { Layout } from "@widgets/index";

const Monitoring = lazy(() => import("@pages/Monitoring"));
const References = lazy(() => import("@pages/References"));
const Reports = lazy(() => import("@pages/Reports"));
const Print = lazy(() => import("@pages/PrintSchema"));
const Home = lazy(() => import("@pages/Admin/Home"));
const Landing = lazy(() => import("@pages/Landing"));

const references: Reference[] = [];
const reports: Report[] = [];

for (const key in referencesRecord) {
  if (isObjectKey(key, referencesRecord)) {
    references.push(referencesRecord[key]);
  }
}

for (const key in reportsRecord) {
  if (isObjectKey(key, reportsRecord)) {
    reports.push(reportsRecord[key]);
  }
}

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <Landing />,
    errorElement: <EmptyPage />,
  },

  {
    path: routes.root.path + routes.authorization.path,
    element: <Authorization />,
    errorElement: <EmptyPage />,
  },

  {
    path: routes.root.path + routes.system.path,
    children: [
      {
        path: routes.print.path,
        element: <Print />,
      },

      {
        path: routes.monitoring.path,
        element: (
          <RequireAuthentication roles={[1, 2, 4]}>
            <Layout />
          </RequireAuthentication>
        ),
        errorElement: <EmptyPage />,
        children: [
          {
            path: routes.current.path,
            element: <Monitoring />,
          },

          {
            path: routes.references.path,
            element: <References />,

            children: references.map((reference) => {
              return {
                element: reference.component,
                path: reference.link,
              };
            }),
          },

          {
            path: routes.reports.path,
            element: <Reports />,

            children: reports.map((report) => {
              return {
                element: report.component,
                path: report.link,
              };
            }),
          },
        ],
      },
    ],
  },

  {
    path: routes.root.path + routes.admin.path,
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
