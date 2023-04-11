import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";
import { Condition } from "@shared/ui";

import { visible, wrapper } from "./switch.module.scss";
import {
  VectorLayersSwitch,
  BaseLayersSwitch,
  WeatherLayersSwitch,
  BordersLayersSwitch,
} from "./switches";

const LayersSwitch = () => {
  const context = useContext(SchemaTemplateContext);
  const open = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [visible]: open,
  });

  return (
    <Condition truthy={context?.fastControls?.layers}>
      <div className={classes}>
        <BaseLayersSwitch />
        <WeatherLayersSwitch />
        <BordersLayersSwitch />
        <VectorLayersSwitch />
      </div>
    </Condition>
  );
};

export default observer(LayersSwitch);
