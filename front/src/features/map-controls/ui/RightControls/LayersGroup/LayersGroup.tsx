import { Space } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";
import { Condition } from "@shared/ui";

import { visible, wrapper } from "./group.module.scss";
import { BaseLayers, WeatherLayers, VectorLayers } from "./ui";

const LayersGroup = () => {
  const context = useContext(SchemaTemplateContext);
  const open = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [visible]: open,
  });

  return (
    <Condition truthy={context?.fastControls?.layers}>
      <Space className={classes} direction={"vertical"}>
        <BaseLayers />
        <WeatherLayers />
        <VectorLayers />
      </Space>
    </Condition>
  );
};

export default observer(LayersGroup);
