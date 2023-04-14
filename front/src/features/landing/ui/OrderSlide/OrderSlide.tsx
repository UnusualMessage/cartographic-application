import React from "react";

import { Slide } from "@entities/landing";
import { Map, View } from "@entities/map";

import BaseLayer from "../../../map/map-layers/ui/BaseLayer";
import BordersLayer from "../../../map/map-layers/ui/BordersLayer";

const OrderSlide = () => {
  return (
    <Slide anchorId={"order"} prevId={"examples"} image={"/images/order.jpg"}>
      <Map>
        <View />
        <BaseLayer />
        <BordersLayer />
      </Map>
    </Slide>
  );
};

export default OrderSlide;
