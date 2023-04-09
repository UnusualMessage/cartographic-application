import { Outlet } from "react-router-dom";

import { ModeratorHeader as Header } from "../../../headers";
import { Body } from "../../../wrappers";
import Main from "../../../wrappers/ui/Main";

const ModeratorLayout = () => {
  return (
    <Body>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
};

export default ModeratorLayout;
