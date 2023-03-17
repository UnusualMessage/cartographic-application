import { Outlet } from "react-router-dom";

import { MonitorHeader } from "../../../headers";
import { wrapper, content } from "../layout.module.scss";

const MonitorLayout = () => {
  return (
    <div className={wrapper}>
      <MonitorHeader />

      <main className={content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MonitorLayout;
