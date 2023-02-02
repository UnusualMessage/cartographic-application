import React from "react";

import Sider from "../../../components/common/Sider";
import Schema from "../../../components/common/Schema";
import Footer from "../../../components/common/Footer";
import Categories from "../../../components/common/Sider/Categories";
import Content from "../../../components/common/Content";
import Information from "../../../components/common/Footer/Information";
import { Loader } from "../../../components/auxiliary/placeholders";
import Overlays from "../../../components/overlays";

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
