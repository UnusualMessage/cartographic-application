import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Content from "./Content/Content";

const User = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Layout />}>
        <Route path={"*"} element={<Content />} />
      </Route>
    </Routes>
  );
};

export default User;
