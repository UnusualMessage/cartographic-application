import React from "react";

import Sider from "../../../features/components/common/Sider";
import Schema from "../../../features/components/common/Schema";
import Footer from "../../../features/components/common/Footer";
import Categories from "../../../features/components/common/Sider/Categories";
import Content from "../../../features/components/common/Content";
import Information from "../../../features/components/common/Footer/Information";
import { Loader } from "../../../features/components/auxiliary/placeholders";
import Overlays from "../../../features/components/overlays";

const View = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Overlays />
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
