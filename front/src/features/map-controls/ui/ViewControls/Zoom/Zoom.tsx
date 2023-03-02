import { Space, Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { ControlsStore, ViewStore } from "@shared/misc";
import Icon from "@shared/ui/Icon";

import { active, wrapper } from "./zoom.module.scss";

const Zoom = () => {
  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  const isPanelActive = ControlsStore.layersPanelActive;

  const classes = classNames({
    [wrapper]: true,
    [active]: isPanelActive,
  });

  return (
    <Space className={classes} direction={"vertical"}>
      <Button icon={<Icon icon="zoom-in" />} size={"large"} onClick={zoomIn} />
      <Button
        icon={<Icon icon="zoom-out" />}
        size={"large"}
        onClick={zoomOut}
      />
    </Space>
  );
};

export default observer(Zoom);
