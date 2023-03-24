import { Outlet } from "react-router-dom";

import { GlobalWrapper } from "@shared/ui";

import { ModeratorHeader } from "../../../headers";
import Main from "../../../Main";

const ModeratorLayout = () => {
  return (
    <GlobalWrapper>
      <ModeratorHeader />

      <Main>
        <Outlet />
      </Main>
    </GlobalWrapper>
  );
};

export default ModeratorLayout;
