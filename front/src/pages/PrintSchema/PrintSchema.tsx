import React from "react";

import { Map, View } from "@entities/map";
import {
  ContextMenu,
  Tooltip,
  Layers,
  MainControls,
  FastControls,
} from "@features/map";
import { printTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";
import { Body } from "@widgets/wrappers";

const PrintSchema = () => {
  return (
    <Body>
      <SchemaTemplateContext.Provider value={printTemplate}>
        <Map toPrint={true}>
          <View />
          <ContextMenu />
          <Tooltip />
          <MainControls />
          <FastControls />
          <Layers />
        </Map>
      </SchemaTemplateContext.Provider>
    </Body>
  );
};

export default PrintSchema;
