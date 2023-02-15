import { Divider, Radio, RadioGroup } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { FormEventHandler } from "react";

import { baseLayers } from "@shared/assets";
import { ControlsStore, BaseLayer, LayersStore } from "@shared/misc";

import { visible, wrapper } from "./group.module.scss";

const ControlsGroup = () => {
  const isPanelOpen = ControlsStore.layersPanelActive;

  const handleChoose: FormEventHandler<HTMLInputElement> = (e) => {
    LayersStore.baseLayer = e.currentTarget.value as BaseLayer;
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
