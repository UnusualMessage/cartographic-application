import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import {
  WeatherLayers,
  BaseLayers,
  VectorLayers,
} from "../../../../RightControls/LayersGroup/ui";

const LayersResult = () => {
  const category = ControlsStore.currentLayerCategory;

  let component = <></>;
  switch (category) {
    case "base":
      component = <BaseLayers />;
      break;
    case "weather":
      component = <WeatherLayers />;
      break;
    case "vector":
      component = <VectorLayers />;
  }
  return component;
};

export default observer(LayersResult);
