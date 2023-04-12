import { Radio, RadioChangeEvent } from "antd";
import { observer } from "mobx-react-lite";

import { baseLayers } from "@shared/assets";
import { LayersStore, BaseLayers } from "@shared/misc";

import { wrapper } from "./switches.module.scss";

const BaseLayersSwitch = () => {
  const choose = (e: RadioChangeEvent) => {
    LayersStore.baseLayerType = e.target.value as BaseLayers;
  };

  return (
    <Radio.Group
      className={wrapper}
      onChange={choose}
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
  );
};

export default observer(BaseLayersSwitch);
