import { Radio, Typography, RadioChangeEvent } from "antd";
import { observer } from "mobx-react-lite";

import { weatherLayers } from "@shared/assets";
import { LayersStore, WeatherLayer } from "@shared/misc";

import { wrapper } from "./switches.module.scss";

const { Text } = Typography;

const WeatherLayersSwitch = () => {
  const choose = (e: RadioChangeEvent) => {
    LayersStore.weatherLayerType = e.target.value as WeatherLayer;
  };

  return (
    <>
      <Text strong>Погода</Text>
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
    </>
  );
};

export default observer(WeatherLayersSwitch);
