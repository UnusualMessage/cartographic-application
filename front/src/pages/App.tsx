import { Route, Routes } from "react-router-dom";

import User from "./User";
import Admin from "./Admin";

const App = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<User />} />
      <Route path={"/admin"} element={<Admin />} />
    </Routes>
  );
};

export default App;
