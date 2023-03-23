import React from "react";

import { Loader } from "@shared/ui";
import {
  Overlays,
  ModeratorAside as Aside,
  EntitiesMenu,
  Schema,
  ModeratorFooter as Footer,
  InfoMenu,
  Content,
} from "@widgets/index";

const Monitoring = () => {
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

export default Monitoring;
