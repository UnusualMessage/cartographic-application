import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { Loader } from "@shared/ui";

import { router } from "../model";

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routing;
