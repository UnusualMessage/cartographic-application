import { Outlet } from "react-router-dom";

import { MonitoringHeader as Header } from "../headers";
import { Body, Main } from "../wrappers";

const MonitoringLayout = () => {
  return (
    <Body>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
};

export default MonitoringLayout;
