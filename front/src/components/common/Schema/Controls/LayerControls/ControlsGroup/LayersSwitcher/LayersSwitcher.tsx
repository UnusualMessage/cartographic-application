import { FormEventHandler } from "react";
import { Divider, Radio, RadioGroup } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { LayersStore } from "../../../../../../../stores/map";
import { baseLayers } from "../../../../../../../assets/map";
import { BaseLayerType } from "../../../../../../../types/common";

const LayersSwitcher = () => {
  const handleChoose: FormEventHandler<HTMLInputElement> = (e) => {
    LayersStore.baseLayer = e.currentTarget.value as BaseLayerType;
  };

  return (
    <>
      <RadioGroup
        onChange={handleChoose}
        selectedValue={LayersStore.baseLayer}
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
        <Divider />
      </RadioGroup>
    </>
  );
};

export default observer(LayersSwitcher);
