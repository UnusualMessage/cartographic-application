import { FullscreenOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { FullScreenStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const FullScreen = () => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.fullscreen) {
    return <></>;
  }

  const active = FullScreenStore.active;

  const exit = () => {
    FullScreenStore.exit();
  };

  const enter = () => {
    FullScreenStore.enter();
  };

  return (
    <Button
      className={wrapper}
      icon={<FullscreenOutlined />}
      type={active ? "primary" : "default"}
      onClick={active ? exit : enter}
    />
  );
};

export default observer(FullScreen);
