import { Position, Toaster } from "@blueprintjs/core";
import React, { useLayoutEffect, useRef } from "react";

import Sider from "../../../components/common/Sider";
import { Map } from "../../../components/common/Map";
import Footer from "../../../components/common/Footer";
import Loader from "../../../components/auxiliary/Loader";
import Categories from "../../../components/common/Sider/Categories";
import TabsList from "../../../components/common/Footer/TabsList";
import Content from "../../../components/common/Content";
import { NotificationsService } from "../../../services/ui";

const View = () => {
  const ref = useRef<Toaster>(null);

  useLayoutEffect(() => {
    NotificationsService.toaster = ref.current;
  }, []);

  return (
    <React.Suspense fallback={<Loader />}>
      <Toaster position={Position.TOP} ref={ref} />

      <Sider>
        <Categories />
      </Sider>
      <Content>
        <Map />
        <Footer>
          <TabsList />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default View;
