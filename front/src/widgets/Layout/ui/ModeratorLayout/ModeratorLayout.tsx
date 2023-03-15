import { Outlet } from "react-router-dom";

import { ModeratorHeader } from "../../../headers";
import { wrapper, content } from "../layout.module.scss";

const ModeratorLayout = () => {
  return (
    <div className={wrapper}>
      <ModeratorHeader />

      <main className={content}>
        <Outlet />
      </main>
    </div>
  );
};

export default ModeratorLayout;
