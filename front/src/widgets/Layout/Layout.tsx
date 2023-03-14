import { AuthStore } from "@entities/user";

import { ModeratorLayout, MonitorLayout, AdminLayout } from "./ui";

const Layout = () => {
  const role = AuthStore.user?.roles;

  let layout: JSX.Element = <></>;

  switch (role) {
    case 2:
      layout = <MonitorLayout />;
      break;
    case 4:
      layout = <ModeratorLayout />;
      break;
    case 8:
      layout = <AdminLayout />;
  }

  return <>{layout}</>;
};

export default Layout;
