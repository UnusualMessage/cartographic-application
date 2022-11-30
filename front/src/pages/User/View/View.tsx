import { Position, Toaster } from "@blueprintjs/core";
import React, { useLayoutEffect, useRef } from "react";

import Sider from "../../../components/common/Sider";
import Schema from "../../../components/common/Schema";
import Footer from "../../../components/common/Footer";
import Categories from "../../../components/common/Sider/Categories";
import Content from "../../../components/common/Content";
import { NotificationsService } from "../../../services/ui";
import Information from "../../../components/common/Footer/Information";
import { Loader } from "../../../components/auxiliary/placeholders";

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
        <Schema />
        <Footer>
          <Information />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default View;
