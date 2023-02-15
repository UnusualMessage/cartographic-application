import React from "react";

import { Loader, Content } from "@shared/ui";
import {
  Overlays,
  Sider,
  Categories,
  Schema,
  Footer,
  Information,
} from "@widgets/index";

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
