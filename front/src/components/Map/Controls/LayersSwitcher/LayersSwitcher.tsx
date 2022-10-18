import { FormEventHandler } from "react";
import { Radio, RadioGroup } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { wrapper } from "./switcher.module.scss";

import { LayersStore } from "../../../../stores";
import { baseLayers } from "../../../../assets/baseLayers";
import { BaseLayerType } from "../../../../types/BaseLayerType";

const LayersSwitcher = () => {
  const handleChoose: FormEventHandler<HTMLInputElement> = (e) => {
    LayersStore.currentBaseLayer = e.currentTarget.value as BaseLayerType;
  };

  return (
    <RadioGroup
      className={wrapper}
      onChange={handleChoose}
      selectedValue={LayersStore.currentBaseLayer}
      label={"Вид карты"}
    >
      {baseLayers.map((layer) => {
        return (
          <Radio
            label={layer.label}
            value={layer.value}
            key={`radio-${layer.value}`}
          />
        );
      })}
    </RadioGroup>
  );
};

export default observer(LayersSwitcher);
