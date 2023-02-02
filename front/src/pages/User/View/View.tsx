import React from "react";

import Schema from "../../../features/common/Schema";
import Sider from "../../../features/common/Sider";
import Categories from "../../../features/common/Sider/Categories";
import Overlays from "../../../features/overlays";
import { Loader } from "../../../shared/ui/placeholders";
import Content from "../../../widgets/Content";
import Footer from "../../../widgets/Footer";
import Information from "../../../widgets/Footer/Information";

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
