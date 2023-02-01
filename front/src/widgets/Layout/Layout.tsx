import { Outlet } from "react-router-dom";

import Header from "../Header";
import Main from "../Main";
import { wrapper } from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={wrapper}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
