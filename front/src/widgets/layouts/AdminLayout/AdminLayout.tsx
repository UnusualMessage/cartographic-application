import { Outlet } from "react-router-dom";

import { Content } from "@shared/ui";
import Main from "@shared/ui/Main";

import { wrapper } from "./layout.module.scss";
import { AdminAside } from "../../asides";
import UserHeader from "../../headers/UserHeader";
import { AdminMenu } from "../../menus";

const AdminLayout = () => {
  return (
    <div className={wrapper}>
      <UserHeader />
      <Main>
        <AdminAside>
          <AdminMenu />
        </AdminAside>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </div>
  );
};

export default AdminLayout;
