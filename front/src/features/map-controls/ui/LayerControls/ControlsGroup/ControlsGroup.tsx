import { Radio, RadioChangeEvent, Space } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { baseLayers } from "@shared/assets";
import { ControlsStore, BaseLayer, LayersStore } from "@shared/misc";

import { visible, wrapper, layers } from "./group.module.scss";

const ControlsGroup = () => {
  const isPanelOpen = ControlsStore.layersPanelActive;

  const handleChoose = (e: RadioChangeEvent) => {
    LayersStore.baseLayer = e.target.value as BaseLayer;
  };

  const classes = classNames({
    [wrapper]: true,
    [visible]: isPanelOpen,
  });

  return (
    <Space className={classes} direction={"vertical"}>
      <Radio.Group
        className={layers}
        onChange={handleChoose}
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
    </Space>
  );
};

export default observer(ControlsGroup);
