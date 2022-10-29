import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "../../components/Layout";

const View = lazy(() => import("./View"));
const Edit = lazy(() => import("./Edit"));
const Notes = lazy(() => import("./Notes"));

const User = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Layout />}>
        <Route path={"*"} element={<View />} />
        <Route path={"edit"} element={<Edit />} />
        <Route path={"notes"} element={<Notes />} />
      </Route>
    </Routes>
  );
};

export default User;
