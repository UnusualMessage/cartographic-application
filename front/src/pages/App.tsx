import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const User = lazy(() => import("./User"));
const Admin = lazy(() => import("./Admin"));

const App = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<User />} />
      <Route path={"/admin"} element={<Admin />} />
    </Routes>
  );
};

export default App;
