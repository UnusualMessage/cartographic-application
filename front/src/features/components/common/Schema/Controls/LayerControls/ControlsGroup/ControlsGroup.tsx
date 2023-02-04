import { Divider, Radio, RadioGroup } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { FormEventHandler } from "react";

import { ControlsStore } from "@shared/api";
import { BaseLayerType } from "@shared/api/types/common";
import { baseLayers } from "@shared/assets";

import { visible, wrapper } from "./group.module.scss";
import { LayersStore } from "../../../../../../../entities/stores/map";

const ControlsGroup = () => {
  const isPanelOpen = ControlsStore.layersPanelActive;

  const handleChoose: FormEventHandler<HTMLInputElement> = (e) => {
    LayersStore.baseLayer = e.currentTarget.value as BaseLayerType;
  };

  const classes = classNames({
    [wrapper]: true,
    [visible]: isPanelOpen,
  });

  return (
    <div className={classes}>
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
    </div>
  );
};

export default observer(ControlsGroup);
