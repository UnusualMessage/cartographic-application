import React from "react";

import { Loader } from "../../../features/components/auxiliary/placeholders";
import Footer from "../../../features/components/common/Footer";
import Information from "../../../features/components/common/Footer/Information";
import Schema from "../../../features/components/common/Schema";
import Sider from "../../../features/components/common/Sider";
import Categories from "../../../features/components/common/Sider/Categories";
import Overlays from "../../../features/components/overlays";
import Content from "../../../shared/ui/Content";

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
