import { Outlet } from "react-router-dom";

import { wrapper, content } from "./layout.module.scss";
import { MonitorHeader } from "../../../headers";

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
