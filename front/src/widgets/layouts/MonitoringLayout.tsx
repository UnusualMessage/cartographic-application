import { Outlet } from "react-router-dom";

import { MonitoringHeader } from "@features/layout";

import { Body, Main } from "../wrappers";

const MonitoringLayout = () => {
  return (
    <Body>
      <MonitoringHeader />
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
};

export default MonitoringLayout;
