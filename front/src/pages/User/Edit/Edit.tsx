import { Position, Toaster } from "@blueprintjs/core";
import React, { useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import Sider from "../../../components/Sider";
import { EditMap } from "../../../components/Map";
import Footer from "../../../components/Footer";
import Loader from "../../../components/common/Loader";
import Changes from "../../../components/Sider/Changes";
import Categories from "../../../components/Sider/Categories";
import Toolbar from "../../../components/Sider/Toolbar";
import Content from "../../../components/Content";
import TabsList from "../../../components/Footer/TabsList";
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
