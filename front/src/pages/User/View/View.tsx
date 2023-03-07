import React from "react";

import { Loader } from "@shared/ui";
import {
  Overlays,
  UserAside as Aside,
  EntitiesMenu,
  Schema,
  UserFooter as Footer,
  InfoMenu,
  Content,
} from "@widgets/index";

const View = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Overlays />
      <Aside>
        <EntitiesMenu />
      </Aside>
      <Content>
        <Schema />
        <Footer>
          <InfoMenu />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default View;
