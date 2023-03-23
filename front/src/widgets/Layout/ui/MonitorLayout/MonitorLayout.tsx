import { Outlet } from "react-router-dom";

import { GlobalWrapper } from "@shared/ui";

import { MonitorHeader } from "../../../headers";
import { content } from "../layout.module.scss";

const MonitorLayout = () => {
  return (
    <GlobalWrapper>
      <MonitorHeader />

      <main className={content}>
        <Outlet />
      </main>
    </GlobalWrapper>
  );
};

export default MonitorLayout;
