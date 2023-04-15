import React from "react";

import { Slide } from "@entities/landing";
import { Map, View } from "@entities/map";
import { landingTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";

import { FastControls } from "../../../../map";
import BaseLayer from "../../../../map/map-layers/ui/BaseLayer";
import BordersLayer from "../../../../map/map-layers/ui/BordersLayer";

const OrderSlide = () => {
  return (
    <Slide anchorId={"order"} prevId={"examples"} image={"/images/order.jpg"}>
      <SchemaTemplateContext.Provider value={landingTemplate}>
        <Map>
          <View />
          <FastControls />
          <BaseLayer />
          <BordersLayer />
        </Map>
      </SchemaTemplateContext.Provider>
    </Slide>
  );
};

export default OrderSlide;
