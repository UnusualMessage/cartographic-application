import React from "react";

import { defaultTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";
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
        <SchemaTemplateContext.Provider value={defaultTemplate}>
          <Schema />
        </SchemaTemplateContext.Provider>
        <Footer>
          <InfoMenu />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default Monitoring;
