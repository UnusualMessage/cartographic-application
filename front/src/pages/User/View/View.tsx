import { Position, Toaster } from "@blueprintjs/core";
import React, { useLayoutEffect, useRef } from "react";

import Sider from "../../../components/common/Sider";
import { Map } from "../../../components/common/Map";
import Footer from "../../../components/common/Footer";
import Loader from "../../../components/auxiliary/Loader";
import Categories from "../../../components/common/Sider/Categories";
import Content from "../../../components/common/Content";
import { NotificationsService } from "../../../services/ui";
import Information from "../../../components/common/Footer/Information";

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
          <Information />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default View;
