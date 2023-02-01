import { Outlet } from "react-router-dom";

import Header from "./Header";
import { wrapper } from "./layout.module.scss";
import Main from "./Main";

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
