import { Radio, RadioChangeEvent, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { baseLayers } from "@shared/assets";
import { LayersStore, BaseLayer } from "@shared/misc";

import { wrapper } from "./switches.module.scss";

const { Text } = Typography;

const BaseLayersSwitch = () => {
  const choose = (e: RadioChangeEvent) => {
    LayersStore.baseLayerType = e.target.value as BaseLayer;
  };

  return (
    <>
      <Text strong>Подложка</Text>
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
    </>
  );
};

export default observer(BaseLayersSwitch);
