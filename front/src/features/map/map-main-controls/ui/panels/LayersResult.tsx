import { observer } from "mobx-react-lite";

import {
  BaseLayersSwitch,
  WeatherLayersSwitch,
  VectorLayersSwitch,
  Panel,
} from "@entities/map";
import { ControlsStore } from "@shared/misc";

const LayersResult = () => {
  const category = ControlsStore.currentLayerCategory;

  let component = <></>;
  switch (category) {
    case "base":
      component = <BaseLayersSwitch />;
      break;
    case "weather":
      component = <WeatherLayersSwitch />;
      break;
    case "vector":
      component = <VectorLayersSwitch />;
  }
  return <Panel>{component}</Panel>;
};

export default observer(LayersResult);
