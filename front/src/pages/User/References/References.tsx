import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../../../components/auxiliary/placeholders";
import Sider from "../../../components/common/Sider";
import { ReferencesTree } from "../../../components/trees";
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
