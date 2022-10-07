import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import View from "./View";

const User = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Layout />}>
        <Route path={"*"} element={<View />} />
      </Route>
    </Routes>
  );
};

export default User;
