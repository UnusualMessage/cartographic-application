import { Outlet } from "react-router-dom";

import { GlobalWrapper } from "@shared/ui";

import { MonitorHeader } from "../../../headers";
import Main from "../../../Main";

const MonitorLayout = () => {
  return (
    <GlobalWrapper>
      <MonitorHeader />

      <Main>
        <Outlet />
      </Main>
    </GlobalWrapper>
  );
};

export default MonitorLayout;
