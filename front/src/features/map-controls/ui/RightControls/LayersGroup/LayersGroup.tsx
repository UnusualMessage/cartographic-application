import { Radio, RadioChangeEvent, Space } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { baseLayers, weatherLayers } from "@shared/assets";
import {
  ControlsStore,
  BaseLayer,
  LayersStore,
  WeatherLayer,
} from "@shared/misc";

import { visible, wrapper, layers } from "./layers.module.scss";

const LayersGroup = () => {
  const open = ControlsStore.layersPanelActive;

  const chooseBaseLayer = (e: RadioChangeEvent) => {
    LayersStore.baseLayerType = e.target.value as BaseLayer;
  };

  const chooseWeatherLayer = (e: RadioChangeEvent) => {
    LayersStore.weatherLayerType = e.target.value as WeatherLayer;
  };

  const classes = classNames({
    [wrapper]: true,
    [visible]: open,
  });

  return (
    <Space className={classes} direction={"vertical"}>
      Подложка
      <Radio.Group
        className={layers}
        onChange={chooseBaseLayer}
        value={LayersStore.baseLayerType}
      >
        {baseLayers.map((layer) => {
          return (
            <Radio value={layer.value} key={`radio-${layer.value}`}>
              {layer.label}
            </Radio>
          );
        })}
      </Radio.Group>
      Погода
      <Radio.Group
        className={layers}
        onChange={chooseWeatherLayer}
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
    </Space>
  );
};

export default observer(LayersGroup);
