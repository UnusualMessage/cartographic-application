import { observer } from "mobx-react-lite";
import React from "react";

import { wrapper } from "../View/view.module.scss";

import Loader from "../../../components/common/Loader";
import Sider from "../../../components/Sider";
import ReferencesTree from "../../../components/trees/ReferencesTree";
import ReferencesStore from "../../../stores/ReferencesStore";

const References = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sider>
        <ReferencesTree />
      </Sider>
      <div className={wrapper}>{ReferencesStore.currentReference?.title}</div>
    </React.Suspense>
  );
};

export default observer(References);
