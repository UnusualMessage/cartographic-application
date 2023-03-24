import React from "react";

import { EntitiesTabs } from "@features/entities-tabs";
import { InfoTabs } from "@features/info-tabs";
import { defaultTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";
import { Loader } from "@shared/ui";
import {
  Overlays,
  ModeratorAside as Aside,
  Schema,
  ModeratorFooter as Footer,
  Content,
} from "@widgets/index";

const Monitoring = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Overlays />
      <Aside>
        <EntitiesTabs />
      </Aside>
      <Content>
        <SchemaTemplateContext.Provider value={defaultTemplate}>
          <Schema />
        </SchemaTemplateContext.Provider>
        <Footer>
          <InfoTabs />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default Monitoring;
