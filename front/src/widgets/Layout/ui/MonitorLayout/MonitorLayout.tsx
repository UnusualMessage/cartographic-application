import { Outlet } from "react-router-dom";

import { MonitorHeader as Header } from "../../../headers";
import { Body } from "../../../wrappers";
import Main from "../../../wrappers/ui/Main";

const MonitorLayout = () => {
  return (
    <Body>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
};

export default MonitorLayout;
