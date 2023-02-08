import React from "react";

import Overlays from "@widgets/Overlays";

import Schema from "../../../features/Schema";
import Content from "../../../shared/ui/Content";
import { Loader } from "../../../shared/ui/placeholders";
import Categories from "../../../widgets/Categories";
import Footer from "../../../widgets/Footer";
import Information from "../../../widgets/Information";
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
