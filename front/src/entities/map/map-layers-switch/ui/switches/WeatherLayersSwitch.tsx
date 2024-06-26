import { Radio, RadioChangeEvent } from "antd";
import { observer } from "mobx-react-lite";

import { weatherLayers } from "@shared/assets";
import { LayersStore, WeatherLayers } from "@shared/misc";

import { wrapper } from "./switches.module.scss";

const WeatherLayersSwitch = () => {
  const choose = (e: RadioChangeEvent) => {
    LayersStore.weatherLayerType = e.target.value as WeatherLayers;
  };

  return (
    <Radio.Group
      className={wrapper}
      onChange={choose}
      value={LayersStore.weatherLayerType}
    >
      {weatherLayers.map((layer) => {
        return (
          <Radio value={layer.value} key={`radio-${layer.value}`}>
            {layer.label}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default observer(WeatherLayersSwitch);
