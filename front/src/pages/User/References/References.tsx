import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import Sider from "../../../features/common/Sider";
import { ReferencesTree } from "../../../features/trees";
import { Loader } from "../../../shared/ui/placeholders";
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
