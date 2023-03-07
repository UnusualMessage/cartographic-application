import { Outlet } from "react-router-dom";

import { wrapper, content } from "./layout.module.scss";
import UserHeader from "../../headers/UserHeader";

const UserLayout = () => {
  return (
    <div className={wrapper}>
      <UserHeader />

      <main className={content}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
