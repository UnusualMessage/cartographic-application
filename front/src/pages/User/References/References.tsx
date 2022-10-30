import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";

import { wrapper } from "../View/view.module.scss";

import Loader from "../../../components/common/Loader";
import Sider from "../../../components/Sider";
import { ReferencesTree } from "../../../components/trees";

const References = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sider>
        <ReferencesTree />
      </Sider>
      <div className={wrapper}>
        <Outlet />
      </div>
    </React.Suspense>
  );
};

export default observer(References);
