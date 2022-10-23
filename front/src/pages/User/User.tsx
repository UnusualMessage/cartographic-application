import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "../../components/Layout";

const View = lazy(() => import("./View"));
const Edit = lazy(() => import("./Edit"));

const User = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Layout />}>
        <Route path={"*"} element={<View />} />
        <Route path={"edit"} element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default User;
