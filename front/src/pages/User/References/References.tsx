import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import Sider from "../../../components/common/Sider";
import { ReferencesTree } from "../../../components/trees";
import Content from "../../../widgets/Content";
import { Loader } from "../../../components/auxiliary/placeholders";

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
