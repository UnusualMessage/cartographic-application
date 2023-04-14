import React from "react";

import { Map, View } from "@entities/map";
import {
  ContextMenu,
  Tooltip,
  MainControls,
  FastControls,
  Layers,
} from "@features/map";
import { defaultTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";
import { Loader } from "@shared/ui";
import { ModeratorAside as Aside } from "@widgets/asides";
import { ModeratorFooter as Footer } from "@widgets/footers";
import { Overlays } from "@widgets/index";
import { EntitiesTabs, InfoTabs } from "@widgets/tabs";
import { Content } from "@widgets/wrappers";

const Monitoring = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Overlays />
      <Aside>
        <EntitiesTabs />
      </Aside>
      <Content>
        <SchemaTemplateContext.Provider value={defaultTemplate}>
          <Map canFullscreen={true}>
            <View />
            <ContextMenu />
            <Tooltip />
            <MainControls />
            <FastControls />
            <Layers />
          </Map>
        </SchemaTemplateContext.Provider>
        <Footer>
          <InfoTabs />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default Monitoring;
