import { Collapse } from "antd";
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
} from "./switches";

const { Panel } = Collapse;

const LayersSwitch = () => {
  const context = useContext(SchemaTemplateContext);
  const open = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [visible]: open,
  });

  return (
    <Condition truthy={context?.fastControls?.layers}>
      <Collapse className={classes} size={"small"} ghost>
        <Panel key={"Подложка"} header={"Подложка"}>
          <BaseLayersSwitch />
        </Panel>

        <Panel key={"Погода"} header={"Погода"}>
          <WeatherLayersSwitch />
        </Panel>

        <Panel header={"Векторные"} key={"Векторные"}>
          <VectorLayersSwitch />
        </Panel>
      </Collapse>
    </Condition>
  );
};

export default observer(LayersSwitch);
