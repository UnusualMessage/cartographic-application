import { Outlet } from "react-router-dom";

import Main from "@shared/ui/Main";

import { wrapper } from "./layout.module.scss";
import UserHeader from "../../headers/UserHeader";

const UserLayout = () => {
  return (
    <div className={wrapper}>
      <UserHeader />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default UserLayout;
