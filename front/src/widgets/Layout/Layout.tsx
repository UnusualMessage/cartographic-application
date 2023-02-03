import { Outlet } from "react-router-dom";

import { wrapper } from "./layout.module.scss";

import Header from "../Header";
import Main from "../../shared/ui/Main";

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
