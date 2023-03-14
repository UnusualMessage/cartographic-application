import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { ControlsStore, ViewStore } from "@shared/misc";

import { active, wrapper, button } from "./zoom.module.scss";

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
    <Space className={classes} direction={"vertical"} size={5}>
      <Button className={button} icon={<ZoomInOutlined />} onClick={zoomIn} />
      <Button className={button} icon={<ZoomOutOutlined />} onClick={zoomOut} />
    </Space>
  );
};

export default observer(Zoom);
