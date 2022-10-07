import { Outlet } from "react-router-dom";

import Header from "../../../components/Header";
import Main from "../../../components/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
