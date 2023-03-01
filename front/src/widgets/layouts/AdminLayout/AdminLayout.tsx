import { Outlet } from "react-router-dom";

import { Content } from "@shared/ui";
import Main from "@shared/ui/Main";

import { wrapper } from "./layout.module.scss";
import { AdminAside } from "../../asides";
import { AdminHeader } from "../../headers";
import { AdminMenu } from "../../menus";

const AdminLayout = () => {
  return (
    <div className={wrapper}>
      <AdminHeader />
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
