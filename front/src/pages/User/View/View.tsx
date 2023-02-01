import React from "react";

import { Loader } from "../../../components/auxiliary/placeholders";
import Schema from "../../../components/common/Schema";
import Sider from "../../../components/common/Sider";
import Categories from "../../../components/common/Sider/Categories";
import Overlays from "../../../components/overlays";
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
