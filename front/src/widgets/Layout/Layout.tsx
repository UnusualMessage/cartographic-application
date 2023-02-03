import { Outlet } from "react-router-dom";

import { wrapper } from "./layout.module.scss";
import Main from "../../shared/ui/Main";
import Header from "../Header";

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
