import React from "react";

import Categories from "../../../features/Categories";
import Schema from "../../../features/components/common/Schema";
import Overlays from "../../../features/components/overlays";
import Information from "../../../features/Information";
import Content from "../../../shared/ui/Content";
import { Loader } from "../../../shared/ui/placeholders";
import Footer from "../../../widgets/Footer";
import Sider from "../../../widgets/Sider";

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
