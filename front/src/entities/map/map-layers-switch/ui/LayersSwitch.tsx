import { Collapse, Space } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";
import { Condition } from "@shared/ui";

import { visible, wrapper } from "./switch.module.scss";
import { switches } from "../model";

const { Panel } = Collapse;

const LayersSwitch = () => {
  const context = useContext(SchemaTemplateContext);
  const open = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [visible]: open,
  });

  const renderItems = () => {
    return switches.map((item) => {
      return (
        <Panel
          key={item.title}
          header={
            <Space align={"center"}>
              {item.icon}
              {item.title}
            </Space>
          }
        >
          {item.component}
        </Panel>
      );
    });
  };

  return (
    <Condition truthy={context?.fastControls?.layers}>
      <Collapse className={classes} size={"small"} ghost>
        {renderItems()}
      </Collapse>
    </Condition>
  );
};

export default observer(LayersSwitch);
