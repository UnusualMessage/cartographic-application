import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import Sider from "../../../features/components/common/Sider";
import { ReferencesTree } from "../../../features/components/trees";
import Content from "../../../features/components/common/Content";
import { Loader } from "../../../features/components/auxiliary/placeholders";

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
