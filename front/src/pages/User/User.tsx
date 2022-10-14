import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import View from "./View";
import Edit from "./Edit";

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
