import { Outlet } from "react-router-dom";

import { GlobalWrapper } from "@shared/ui";

import { ModeratorHeader } from "../../../headers";
import { content } from "../layout.module.scss";

const ModeratorLayout = () => {
  return (
    <GlobalWrapper>
      <ModeratorHeader />

      <main className={content}>
        <Outlet />
      </main>
    </GlobalWrapper>
  );
};

export default ModeratorLayout;
