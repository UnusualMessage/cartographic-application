import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import Loader from "../../../components/common/Loader";
import Sider from "../../../components/Sider";
import { ReferencesTree } from "../../../components/trees";
import Content from "../../../components/Content";

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
