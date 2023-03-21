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

import { visible, wrapper, layers } from "./group.module.scss";

const ControlsGroup = () => {
  const isPanelOpen = ControlsStore.layersPanelActive;

  const chooseBaseLayer = (e: RadioChangeEvent) => {
    LayersStore.baseLayer = e.target.value as BaseLayer;
  };

  const chooseWeatherLayer = (e: RadioChangeEvent) => {
    LayersStore.weatherLayer = e.target.value as WeatherLayer;
  };

  const classes = classNames({
    [wrapper]: true,
    [visible]: isPanelOpen,
  });

  return (
    <Space className={classes} direction={"vertical"}>
      Подложка
      <Radio.Group
        className={layers}
        onChange={chooseBaseLayer}
        value={LayersStore.baseLayer}
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
        value={LayersStore.weatherLayer}
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

export default observer(ControlsGroup);
