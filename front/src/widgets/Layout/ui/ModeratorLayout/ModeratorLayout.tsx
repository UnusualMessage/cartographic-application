import { Outlet } from "react-router-dom";

import { wrapper, content } from "./layout.module.scss";
import { ModeratorHeader } from "../../../headers";

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
