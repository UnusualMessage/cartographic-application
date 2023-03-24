import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import {
  WeatherLayers,
  BaseLayers,
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
  }
  return component;
};

export default observer(LayersResult);
