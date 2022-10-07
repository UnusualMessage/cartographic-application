import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../../components/Main";

const User = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Layout />}>
        <Route path={"*"} element={<Main />} />
      </Route>
    </Routes>
  );
};

export default User;
