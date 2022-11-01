import { Position, Toaster } from "@blueprintjs/core";
import React, { useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import Sider from "../../../components/common/Sider";
import { EditMap } from "../../../components/common/Map";
import Footer from "../../../components/common/Footer";
import Loader from "../../../components/auxiliary/Loader";
import Changes from "../../../components/common/Sider/Changes";
import Categories from "../../../components/common/Sider/Categories";
import Toolbar from "../../../components/common/Sider/Toolbar";
import Content from "../../../components/common/Content";
import TabsList from "../../../components/common/Footer/TabsList";
import { HistoryService } from "../../../services/history";

const Edit = () => {
  const ref = useRef<Toaster>(null);

  useLayoutEffect(() => {
    HistoryService.toaster = ref.current;
  }, []);

  return (
    <React.Suspense fallback={<Loader />}>
      <Toaster position={Position.TOP} ref={ref} />

      <Sider>
        <Categories />
        <Toolbar />
        <Changes />
      </Sider>
      <Content>
        <EditMap />
        <Footer>
          <TabsList />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default observer(Edit);
