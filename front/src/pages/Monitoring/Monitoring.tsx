import React from "react";

import { Map, View } from "@entities/map";
import { MonitoringAside, MonitoringFooter } from "@features/layout";
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
import { Overlays } from "@widgets/index";
import { EntitiesTabs, InfoTabs } from "@widgets/tabs";
import { Content } from "@widgets/wrappers";

const Monitoring = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Overlays />
      <MonitoringAside>
        <EntitiesTabs />
      </MonitoringAside>
      <Content>
        <SchemaTemplateContext.Provider value={defaultTemplate}>
          <Map canFullscreen={true}>
            <View>
              <View.Memo />
            </View>
            <ContextMenu />
            <Tooltip />
            <MainControls />
            <FastControls />
            <Layers />
          </Map>
        </SchemaTemplateContext.Provider>
        <MonitoringFooter>
          <InfoTabs />
        </MonitoringFooter>
      </Content>
    </React.Suspense>
  );
};

export default Monitoring;
