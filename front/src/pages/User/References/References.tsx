import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../../../features/auxiliary/placeholders";
import Sider from "../../../features/common/Sider";
import { ReferencesTree } from "../../../features/trees";
import Content from "../../../widgets/Content";

const References = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sider>
        <ReferencesTree />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </React.Suspense>
  );
};

export default observer(References);
